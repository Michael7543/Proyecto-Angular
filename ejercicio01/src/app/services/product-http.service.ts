import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from '../modules/product.modul';

@Injectable({  //Decorador 
  providedIn: 'root'
})
export class ProductHttpService {
  readonly API_URL:string="https://api.escuelajs.co/api/v1/products";//solo de lectura la vareiable
  constructor(private httpClient: HttpClient) { }

  getAll() {
     return this.httpClient.get(this.API_URL);
   }
   getOne(id:number) {
   const url = `${this.API_URL}/${id}`;
    return this.httpClient.get(url);
   }
   store(product:ProductModel) { 
    return this.httpClient.post(this.API_URL, product)
 
   }
 
   update(product:ProductModel,id:number)  {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.put(url, product)
 
   }
   eraser(id:number) {
    const url = `${this.API_URL}/${id}`;
     return this.httpClient.delete(url)
  
   }
}
