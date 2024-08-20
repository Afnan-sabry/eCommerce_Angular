import { Component } from '@angular/core';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'eCommerce-Task';
  products:Product[]=[];
  
  productCreated(newProduct:Product){
    this.products.push(newProduct);
  }
}
