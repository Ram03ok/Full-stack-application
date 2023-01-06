import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Cart } from '../common/cart';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductviewService {
  productURL:string="http://localhost:8080/foodbasket/product"
  cartURL:string="http://localhost:8080/foodbasket/cart"



  constructor(private httpClient:HttpClient) { }

  getAllProducts(): Observable<Product[]>
  {
    return this.httpClient.get<getProducts>(this.productURL).
    pipe(map(response=>response._embedded.products))
  }

  getProductById(product_id:number):Observable<Product>
  {
     const productURL=this.productURL+"/"+product_id;
    return this.httpClient.get<Product>(productURL);
  }
  saveToCart(cart:Cart):Observable<Cart>
  {
    //console.log(cart)
    const httpOptions={
      headers:new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'auth-token',
        'Access-Control-Allow-origin':'*'
      })
    };

    return this.httpClient.post<Cart>(this.cartURL,cart,httpOptions);
  }

}
interface getAllCart{
  _embedded:{
    carts:Cart[]
  }
  
}

interface getProducts{
  _embedded:{
    products:Product[]
  }
}
