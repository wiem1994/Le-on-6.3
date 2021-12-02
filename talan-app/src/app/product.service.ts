import { Injectable } from '@angular/core';
import {Cursus} from './cursus'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  items: Cursus[] = [];


  addToCart(curs: Cursus) {
    this.items.push(curs);
  }

  getItems() {
    return this.items;
  }

  constructor() { }
}
