import { Component, OnInit } from '@angular/core';
import { ProductModel, UpdateProductDto } from 'src/app/modules/product.modul';
import { ProductHttpService } from 'src/app/services/product-http.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  products:ProductModel[] = [];
  selectProduct:UpdateProductDto={title:"",price:3,description:""};

  //httpclient es una clase hacer las peticiones
  constructor(private productHttpService: ProductHttpService) {
    this.initProduct();
  } //Inyeccion de dependencia

  initProduct(){
    this.selectProduct = {title:"",price:0,description:""};
  }
  ngOnInit(): void {
   
  }
 
  
  editproduct(product:ProductModel){
    this.selectProduct = product;
  }
 
}