import { Component, OnInit } from '@angular/core';
import { productService } from './product.service';
import { Iproduct } from './product.interface';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],

})
export class ProductListComponent implements OnInit {
getSingleProduct() {
throw new Error('Method not implemented.');
}
  componentTitle: string = 'Item star rating number: '
  imageWidth: number = 100;
  imageHeight: number = 100;
  imageMargin: number = 2;
  showImage: boolean = false

  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    console.log('filtered by:', value)
    this.filteredProducts = this.performFilter(value);
  }

  filteredProducts: Iproduct[] = [];

  products: Iproduct[] = [

  ]

  constructor(private _service: productService,) { 
    this.products = this._service.getProductList()
  }

  performFilter(filterBy: string): Iproduct[] {
    filterBy = filterBy.toLocaleLowerCase()
    return this.products.filter((product: Iproduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy));
  }
  hideImage(): void {
    this.showImage = !this.showImage
  }
  ngOnInit(): void {
    this.listFilter = ''
  }
  onRatingClicked(message: string): void {
    this.componentTitle = ' Item star rating number:' + message
  }

}
