import { Component, Input, Output } from '@angular/core';
import products, { Product } from '../models/product';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.scss'
})
export class ViewProductComponent {

  @Input({required:true}) product!:Product;
  // @Output()productClicked:Event<>
}
