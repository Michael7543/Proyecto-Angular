import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CreateProductDto, ProductModel, UpdateProductDto } from '../modules/product.modul';
//servicio se encarga de hacer la peticion y la devuelve al componente
//servicio hace la peticion al back y le llega la respuesta
//todos los componentes de comunican con un solo servicio

@Injectable({ //Decorador 
  providedIn: 'root'
})
export class ProductHttpService {
  get(id: any) {
    throw new Error('Method not implemented.');
  }
  readonly API_URL:string="https://api.escuelajs.co/api/v1/products";//solo de lectura la vareiable
  constructor(private httpClient: HttpClient) { }//metodos httpclient
  //productmode[]Cuando recuperamos todo el arreglo de objetos
  getAll():Observable<ProductModel[]>{
    const url = `${this.API_URL}`;
    return this.httpClient.get<ProductModel[]>(this.API_URL);
   }

   getOne(id:ProductModel['id']):Observable<ProductModel> {
   const url = `${this.API_URL}/${id}`;
    return this.httpClient.get<ProductModel>(url);
   }
         //objeto de tipo createproductDto
   store(product:CreateProductDto):Observable<ProductModel> { 
    return this.httpClient.post<ProductModel>(this.API_URL, product)
   }
 
   update(product:UpdateProductDto,id:ProductModel['id']):Observable<ProductModel>  {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.put<ProductModel>(url, product)
   }

   destroy(id: ProductModel['id']):Observable<any> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.delete<any>(url).pipe(map((response: { rta: boolean; }) => {
        return response.rta;
      })
      );
  }
   }

// ng g s services/productHttp   -genera el archivo de servicio
