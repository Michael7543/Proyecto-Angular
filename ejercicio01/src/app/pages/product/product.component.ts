import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
//ngoninit se ejecuta luego del constructor
export class ProductComponent implements OnInit {
  //httpclient es una clase hacer las peticiones
  constructor(private httpClient: HttpClient) {}//Inyeccion de dependencia

  ngOnInit(): void {
    //this.getProduct();
    //this.getProducts();
    //this.createProduct();
    //this.updateProduct();
    this.deleteProduct();
  }
  getProducts() {
   this.httpClient
      .get('https://api.escuelajs.co/api/v1/products').subscribe(
        response => {                    //funcion flecha o landa
        console.log(response);
      });
  }
//subscribe lista de espera va llegar la respuesta
//Observable trae la informacion
  getProduct() {
    this.httpClient
      .get('https://api.escuelajs.co/api/v1/products/20')
      .subscribe(response => {
        console.log(response);
      });
  }
  createProduct() {
    const data = {
      title:'esfero',
      price: 45,
      description: 'utiles escolares',
      category: 1,
      images: ['https://api.lorem.space/image/shoes?w=640&h=480&r=8318'],
    };
    const url = 'https://api.escuelajs.co/api/v1/products';
    this.httpClient.post(url, data).subscribe(
      response => {
      console.log(response);
    });
  }

  updateProduct() {
    const data = {
      title: 'lapiz',
      price: 60,
      description: 'calzado-Michael Moran',
      category: 2,
      images: ['https://api.lorem.space/image/shoes?w=640&h=480&r=8318'],
    };
    const url = 'https://api.escuelajs.co/api/v1/products/201';

    this.httpClient.put(url, data).subscribe(
      response => {
      console.log(response);
    });

  }
  deleteProduct(){
    const url = 'https://api.escuelajs.co/api/v1/products/202';

    this.httpClient.delete(url).subscribe(
      response => {
      console.log(response);
    }
    );

  }

}

