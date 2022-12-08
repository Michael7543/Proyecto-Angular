import { Component, OnInit } from '@angular/core';
import { ProductHttpService } from 'src/app/services/product-http.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
//ngoninit se ejecuta luego del constructor
export class ProductComponent implements OnInit {
  //httpclient es una clase hacer las peticiones
  constructor(private productHttpService: ProductHttpService) {} //Inyeccion de dependencia

  ngOnInit(): void {
    //this.getProduct();
    //this.getProducts();
    //this.createProduct();
    //this.updateProduct();
    //this.deleteProduct();
  }
  //getAll me devuelve un observable
  getProducts() {
    return this.productHttpService.getAll().subscribe((response) => {
      console.log(response);
    });
  }
  //subscribe lista de espera va llegar la respuesta
  //Observable trae la informacion
  getProduct() {
    return this.productHttpService.getOne(6).subscribe((response) => {
      console.log(response);
    });
  }
/*   createProduct() {
    return this.productHttpService.store(data).subscribe((response) => {
      console.log(response);
    });
  }

  updateProduct() {
    return this.productHttpService.update(data, 8).subscribe((response) => {
      console.log(response);
    });
  } */
  deleteProduct() {
    return this.productHttpService.eraser(6).subscribe((response) => {
      console.log(response);
    });
  }
}
//del component llama los metodos al servicio