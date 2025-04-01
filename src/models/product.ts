import { ProductCategory } from "./categories";

export interface Product {
    imgUrl: string;
    name: string;
    price: number;
    oldPrice: number;
    description: string;
    descriptionLong: string;
    additionalInfo: string;
    moreDetails: string[];
    reviews: string[];
    rating: number;
    code: string;
    category: ProductCategory;
}

