import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import products, { Product } from './models/product';
import { ViewProductComponent } from './view-product/view-product.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'eCommerce-Task';
  //products:Product[]=[]
  
  products=products;
  //@ViewChild(ProductsComponent) productChild?:ProductsComponent;
  @ViewChild('prodRef0',{read:ElementRef}) productChild?:ElementRef;
  @ViewChild('prodRef1') productChild1?:ViewProductComponent;
  productCreated(newProduct:Product){
    this.products.push(newProduct);
  }
  onProoductClicked(product:Product){
    console.log(this.productChild)
    console.log(this.productChild1)
    console.log(product)
  }
}
