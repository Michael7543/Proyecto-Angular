import { Component, OnInit } from '@angular/core';
import { ProductModel, UpdateProductDto } from 'src/app/modules/product.modul';
import { ProductHttpService } from 'src/app/services/product-http.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
//ngoninit se ejecuta luego del constructor
export class ProductComponent implements OnInit {
  
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
    //this.getProduct();
    this.getProducts();
    //this.createProduct();
    //this.updateProduct();
    //this.deleteProduct();
  }
  //getAll me devuelve un observable
  getProducts() {
    return this.productHttpService.getAll().subscribe((response) => {
      this.products = response;
      //console.log(response);
    });
  }
  //subscribe lista de espera va llegar la respuesta
  //Observable trae la informacion

  getProduct() {
    return this.productHttpService.getOne(6).subscribe((response) => {
      console.log(response);
    });
  }
  createProduct() {
    const data ={
      id: 2,
      title: "zapato",
      description:"zapato grande",
      price: 23,
      categoryId:2,
      images:["https://api.lorem.space/image/fashion?w=640&h=480&r=3268"]

    }
    return this.productHttpService.store(data).subscribe((response) => {
      console.log(response);
    });
  }

  updateProduct() {
    const data ={
      id: 2,
      title: "zapato",
      description:"zapato grande",
    }
    return this.productHttpService.update(data, 8).subscribe((response) => {
      console.log(response);
    });
  }
  editproduct(product:ProductModel){
    this.selectProduct = product;
  }
  deleteProduct(id:ProductModel['id']) {
    return this.productHttpService.destroy(id).subscribe((response) => {
      this.products = this.products.filter(product => product.id != id);
      //console.log(response);
    });
  }
}
//del component llama los metodos al servicio
//invocar al metodo editproduct traigo el producto edito y lo vuelvo a enviar
