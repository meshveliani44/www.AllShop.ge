import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Iproduct } from './product.interface';
import { productService } from './product.service';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  addToCart(argument: Iproduct) {
    throw new Error('Method not implemented.');
  }
  componentTitle: string = 'Product Details'


  product: Iproduct | undefined;
  imageWidth: number =300;
  imageHeight: number = 300;
  imageMargin: number = 0;
  borderWidth: number = 1;
  boxShadow: number = 20;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private _service: productService,

  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this._service.getProductById(id)
  }



  goBack(): void {
    this.router.navigate(['/products'])
  }

}


