import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Iproduct } from './product.interface';

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
   this.products = {
    
      "productId": id,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2021",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfWEVoq7Keb3f0H9jS8ywNv8t8priCW5EDjA&usqp=CAU"
   }
  }



  goBack(): void {
    this.router.navigate(['/products'])
  }

}


