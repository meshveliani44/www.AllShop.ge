import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Iproduct } from './product.interface';
import { productService } from './product.service';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  componentTitle: string = 'Product Details'


  products: Iproduct | undefined;


  constructor(private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
   
  }



  goBack(): void {
    this.router.navigate(['/products'])
  }

}


