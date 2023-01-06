import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Category } from '../common/category';
import { Product } from '../common/product';
import { User } from '../common/user';
import { ProductViewComponent } from '../components/product-view/product-view.component';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  categoryURL: string="http://localhost:8080/foodbasket/food_category"
  productURL:string="http://localhost:8080/foodbasket/product"
  userURL:string="http://localhost:8080/foodbasket/user"

  

  constructor(private httpClient:HttpClient) { }

  
  getAllCategory() :Observable<Category[]>{
    return this.httpClient.get<getCategoryResponse>(this.categoryURL).
    pipe(map(response=>response._embedded.categories))
  }

  getAllProducts(): Observable<Product[]>
  {
    return this.httpClient.get<getProducts>(this.productURL).
    pipe(map(response=>response._embedded.products))
  }

  getAllUsers(): Observable<User[]>
  {
    return this.httpClient.get<getUserData>(this.userURL).
    pipe(map(response=>response._embedded.users))
  }

  
  saveUser(user:User): Observable<User>{
    const httpOptions={
      headers:new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'auth-token',
        'Access-Control-Allow-origin':'*'
      })
    };
    return this.httpClient.post<User>(this.userURL,user,httpOptions);
  }

  saveProduct(product:Product){
    const httpOptions={
      headers:new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'auth-token',
        'Access-Control-Allow-origin':'*'
      })
    };
    return this.httpClient.post<Product>(this.productURL,product,httpOptions);

  }

  getProductById(product_id:number):Observable<Product>
  {
     const productURL=this.productURL+"/"+product_id;
    return this.httpClient.get<Product>(this.productURL);
  }

  updateProduct(product:Product):Observable<Product>
  {
    const httpOptions=
    {
      headers:new HttpHeaders({
        'content-type':'application/json',
        'Authorization' :'auth-token',
        'Access-Control-Allow-origin':'*'
      })
    };
    return this.httpClient.put<Product>(this.productURL+`/${product.product_id}`,product,httpOptions);
  }

  deleteProduct( product_id:number)
  {
    const httpOptions={
      headers:new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'auth-token',
        'Access-Control-Allow-origin':'*'
      })
    };
    return this.httpClient.delete<Product>(this.productURL+`${product_id}`,httpOptions);
  }
}
interface getCategoryResponse{
  _embedded: {
    categories :Category[]
  }
}
interface getProducts{
  _embedded:{
    products:Product[]
  }
}
interface getUserData{
  _embedded:{
    users:User[]
  }
}
