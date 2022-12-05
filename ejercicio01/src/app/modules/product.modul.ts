import { CategoryModel} from "./category.modul";

interface ProductModel {
    id: number;
    title: string;
    price: number;
    description: string;
    category:CategoryModel;
    images: string[];

}
