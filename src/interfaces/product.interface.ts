import { number, string } from "zod";

export interface Product {
    id: string;
    description: string;
    images: string[];
    inStock: number;
    price: number;
    sizes: Size[];
    slug: string;
    tags: string[];
    title: string;
    // type: Type;
    gender: Category
}

// export interface CartProduct {
//     id: string
//     slug: string
//     title: string
//     price: number
//     quantity: number
//     sizes: Size
// }

export interface CartProduct {
    id: Product['id']
    slug: Product['slug']
    title: Product['title']
    price: Product['price']
    quantity: number
    size: Size
    image: string
}

export interface IProductImage {
    id: number,
    url: string,
    productId?: string
}

type Category = 'men' | 'women' | 'kid' | 'unisex';
export type Size = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';
export type Type = 'shirts' | 'pants' | 'hoodies' | 'hats';