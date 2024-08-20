import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
  model:Product={
    name:'',
    description:'',
    image:'',
    price:0
  };
  @Output() newProductCreated=new EventEmitter<Product>();

  onSaveProduct(){
    this.newProductCreated.emit(this.model);
  }
}
