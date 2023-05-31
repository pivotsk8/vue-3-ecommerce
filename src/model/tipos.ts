
export interface Products {
    id: number;
    name: string;
    price: number;

}


export interface CartDetail {
 product: Products;
    amount: number;

}

export interface Category {
    categoryId: number;
    name: string
}

