import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cart } from '../common/cart';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartURL:string="http://localhost:8080/foodbasket/cart"
  constructor(private httpClient:HttpClient) { }

  getAllCart(): Observable<Cart[]>
  {
    return this.httpClient.get<getAllCart>(this.cartURL).
    pipe(map(response=>response._embedded.carts))
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



