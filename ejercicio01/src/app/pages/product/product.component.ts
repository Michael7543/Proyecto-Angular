import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
//oninit se ejecuta luego del constructor
export class ProductComponent implements OnInit  {
//httpclient hacer las peticiones
  constructor(private httpClient:HttpClient) { 
    this.httpClient.get("https://api.escuelajs.co/api/v1/products")
  }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    const responce = this.httpClient.get("https://api.escuelajs.co/api/v1/products")
    console.log(responce)
  }
  
}
