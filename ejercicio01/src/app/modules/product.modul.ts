import { CategoryModel} from "./category.modul";

export interface ProductModel {
    id: number;
    title: string;
    price: number;
    description: string;
    category:CategoryModel;
    images: string[];

}