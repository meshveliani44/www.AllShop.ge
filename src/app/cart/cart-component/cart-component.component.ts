import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/product-list/product.interface';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.scss']
})
export class CartComponentComponent implements OnInit {

  cartproduct: Iproduct[]= []


  constructor(private cartservice: CartService ) { }

  ngOnInit(): void {
    this.cartproduct =  this.cartservice.cartproduct
    console.log(this.cartproduct)
  }



}
