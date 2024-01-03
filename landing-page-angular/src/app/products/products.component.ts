import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/product.model';
import { ApiService } from '../services/api.service';
import { isPromise } from 'util/types';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  productsList: IProduct[] = [];

  constructor ( private _apiService: ApiService ) {}

  public ngOnInit(): void {
    this._apiService.getAllProducts().subscribe( (data: IProduct[]) => {
      this.productsList = data;
    })
  }

}
