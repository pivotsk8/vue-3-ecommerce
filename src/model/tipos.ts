
export interface Products {
    id: number;
    name: string;
    price: number;
    image: string | null;

}


export interface CartDetail {
 product: Products;
    amount: number;

}

export interface Category {
    categoryId: number;
    name: string
}

