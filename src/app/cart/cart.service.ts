import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Iproduct } from '../product-list/product.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartproduct: Iproduct[] = []
  constructor() { }

addToCart(prod: Iproduct): void{
this.cartproduct.push(prod)
}



}
