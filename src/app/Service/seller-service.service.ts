import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Seller } from '../common/seller';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SellerServiceService {
  
  sellerURL: string="http://localhost:8080/foodbasket/seller"


  constructor(private httpClient:HttpClient) { }

  getAllSeller() :Observable<Seller[]>{
   return this.httpClient.get<getSellerData>(this.sellerURL).
   pipe(map(response=>response._embedded.sellers))
  }

}
interface getSellerData{
  _embedded:{
    sellers:Seller[]
  }
}
