import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/common/cart';
import { Product } from 'src/app/common/product';
import { CartService } from 'src/app/Service/cart.service';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart:Cart[];
  count:number=1;
  total:number;
  user_id:number;
  constructor(private cservice:CartService,private activateroute:ActivatedRoute,private service:ServiceService,private route:Router) { }
 
  

  ngOnInit(): void {
    this.getAllCart();

  }
  
  
  getAllCart() 
  {
   this.cservice.getAllCart().subscribe(data=>{
     this.cart=data});
 }

 increment(count:number){
   return this.count++;
 }
 decrement(count:number){
  return this.count--;
 }

 Total() {  
   this.total = 0;  
  this.cart.forEach((currentValue, index) => {
        this.total=this.total+ currentValue.price;
  });

  return this.total;
}
}
