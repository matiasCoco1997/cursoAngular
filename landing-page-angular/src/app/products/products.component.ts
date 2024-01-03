import { Component } from '@angular/core';
import { productList } from './products.mock';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  productsList = productList;

}
