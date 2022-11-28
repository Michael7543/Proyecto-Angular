import { CategoryModel} from "./category.modul";

interface ProductModel {
    id: number;
    name: string;
    price: number;
    description: string;
    category:CategoryModel;

}