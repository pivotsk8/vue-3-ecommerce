import { computed, ref } from "vue";
import { defineStore } from "pinia";
import type { CartDetail, Products } from "../model/tipos";
import { useLocalStorage } from "@vueuse/core";

export const useCartStore = defineStore("cart", () => {
  const details = ref(useLocalStorage<CartDetail[]>("carDetails", []));

  //getters
  const sendWatsAppMessage = () => {
    let message = "hola quiero realizar la siguiente compra:\n\n";
    details.value.forEach((d) => {
      message += `Producto: ${d.product.name} \n`;
      message += `Cantidad: ${d.amount}\n`;
      message += `SubTotal: $${d.amount * d.product.price}\n`;
      message += "____________________________________ \n";
    });

    message += `\n Total a pagar: ${totalAmount()} \n\n`;
    message += "Muchas gracias! 🙂";
    console.log(message);

    return encodeURI(message);
  };
  const whatsAppLink = computed(
    () =>
      `https://api.whatsapp.com/send/?phone=573227265734&text=${sendWatsAppMessage()}`
  );

  // action
  const addProduct = (product: Products) => {
    const detailFound = details.value.find(
      (detail) => detail.product.id === product.id
    );
    detailFound
      ? detailFound.amount++
      : details.value.push({
          product,
          amount: 1,
        });
  };

  const deleteProduct = (productId: number) => {
    const index = details.value.findIndex(
      (detail) => detail.product.id === productId
    );
    details.value.splice(index, 1);
  };

  const itemCount = () => {
    let count = 0;
    details.value.forEach((element) => {
      count += element.amount;
    });
    return count;
  };

  const increment = (productId: number) => {
    const detailFound = details.value.find(
      (detail) => detail.product.id === productId
    );
    detailFound ? detailFound.amount++ : null;
  };

  const decrement = (productId: number) => {
    const detailFound = details.value.find(
      (detail) => detail.product.id === productId
    );
    detailFound ? detailFound.amount-- : null;
    detailFound?.amount === 0 ? deleteProduct(productId) : null;
  };
  const totalAmount = () => {
    let sum = 0;
    details.value.forEach((element) => {
      sum += element.amount * element.product.price;
    });
    return sum;
  };

  return {
    details,
    whatsAppLink,
    addProduct,
    itemCount,
    increment,
    decrement,
    deleteProduct,
    totalAmount,
  };
});
