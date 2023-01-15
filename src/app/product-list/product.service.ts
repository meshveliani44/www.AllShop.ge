import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, tap, throwError } from "rxjs";
import { Iproduct } from "./product.interface";


@Injectable({
  providedIn: 'root'
})
export class productService {
  getDetail(id: number) {
    throw new Error('Method not implemented.');
  }

  products:Iproduct[] = [
    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2021",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfWEVoq7Keb3f0H9jS8ywNv8t8priCW5EDjA&usqp=CAU",
      "quantity": 4
    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2021",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "https://pyxis.nymag.com/v1/imgs/742/966/0471986284a1fad1985a37e49f3be0d269.rsquare.w600.jpg",
      "quantity": 4
    },
    {
      "productId": 3,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2021",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "starRating": 2.5,
      "imageUrl": "https://target.scene7.com/is/image/Target/GUEST_98659ca6-980f-4680-8c2f-eba871f9bf49",
      "quantity": 4
    },
    {
      "productId": 4,
      "productName": "Saw",
      "productCode": "TBX-0022",
      "releaseDate": "May 15, 2021",
      "description": "15-inch steel blade hand saw",
      "price": 11.55,
      "starRating": 3.7,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqvK6gXDq7j7LRcZvfy89W8J8Iht3-6A4pHw&usqp=CAU",
      "quantity": 4
    },
    {
      "productId": 5,
      "productName": "Video Game Controller",
      "productCode": "GMG-0042",
      "releaseDate": "October 15, 2020",
      "description": "Standard two-button video game controller",
      "price": 35.95,
      "starRating": 4.6,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy8Robhb0j-sS3brtASLY8NYOg4mULHKb-ow&usqp=CAU",
      "quantity": 4
    },
    {
      "productId": 6,
      "productName": "sofa",
      "productCode": "GDN-0035",
      "releaseDate": "September 27, 2021",
      "description": "Modern Leather sofa",
      "price": 1144.40,
      "starRating": 4.0,
      "imageUrl": "https://cdn-images.article.com/products/SKU2128/2890x1500/image88973.jpg",
      "quantity": 4
    },
    {
      "productId": 7,
      "productName": "mouse",
      "productCode": "GMG-0124",
      "releaseDate": "july 18, 2019",
      "description": "mouse for computer with bluethooth",
      "price": 14.60,
      "starRating": 3.5,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2JDewuh19uN8qiD1aXDBC7H2h2bZ_M2EquA&usqp=CAU",
      "quantity": 4
    },
    {
      "productId": 8,
      "productName": "wallet",
      "productCode": "GDG-0017",
      "releaseDate": "february 30, 2020",
      "description": "medium size wallet, black",
      "price": 21.30,
      "starRating": 3.0,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiXsoLWmDTeuRMbtUm2b7KRYEHRH4URwyU9TFaJa83dy3H6PbnmEyJnCaftSFn65U8n18&usqp=CAU",
      "quantity": 4
    },
    {
      "productId": 9,
      "productName": "headphones",
      "productCode": "GMG-0109",
      "releaseDate": "march 4, 2019",
      "description": "Marshall MAJOR 4 black",
      "price": 199.99,
      "starRating": 4.1,
      "imageUrl": "https://cdn.onoff.ge/media/thumbs/062/0626770_marshall-major-iv-black_415.jpeg",
      "quantity": 4
    },
    {
      "productId": 10,
      "productName": "backpack",
      "productCode": "GDG-0079",
      "releaseDate": "february 9, 2020",
      "description": "LTT Backpack, black",
      "price": 249.99,
      "starRating": 4.4,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1O-34cycyXrfHftB85FoDATQ4CUpXo7vi6g&usqp=CAU",
      "quantity": 4
    },

  ]

  private productUrl = 'app/product-list'
  constructor(private http: HttpClient) { }


  getProducts(): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(this.productUrl).pipe(
      tap(data => console.log("All", JSON.stringify(data))),
      catchError(this.handleError)
    )
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured ${err.status}, error message is: ${err.message}`
    }
    console.error(errorMessage)
    return throwError(() => errorMessage)
  }


  getProductList(): Iproduct[] {
    return this.products
  }


  getProductById(id: number): Iproduct {
    let item = this.products.filter((element:Iproduct ) => element.productId === id)[0]
    return item
  }


} 

// getSingleProduct(id: number): Observable <Iproduct>{
  //   return this.http.get<Iproduct>(`${this.productUrl}/products/${id}`)
  // }
