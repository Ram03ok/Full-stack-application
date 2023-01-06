import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductviewService } from 'src/app/Service/productview.service';
import { NavigationExtras } from '@angular/router';
import { CartService } from 'src/app/Service/cart.service';
import { Cart } from 'src/app/common/cart';
import { ServiceService } from 'src/app/Service/service.service';
import { UserLoginComponent } from '../user-login/user-login.component';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css'],
 
})
export class ProductViewComponent implements OnInit {

  product:Product=new Product(0," "," ",0," "," "," ",0,0);
  product_id: number;
  user_id:number;
  cart:Cart;
  constructor( private uservice:ServiceService,
    private service:ProductviewService,
    private route:Router,
    private activateroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activateroute.paramMap.subscribe(()=>{this.getProductById()});
    //this.activateroute.paramMap.subscribe(()=>{this.addItemToCart(this.product)});
    
  }

  getProductById() 
  {
    const product_id =+this.activateroute.snapshot.paramMap.get("id");
    if(product_id>0)
    {
      this.service.getProductById(product_id).subscribe(data => {this.product=data});
    }
  }


  addItemToCart(product:Product)
  {
    let name = this.product.product_name;
    let image = this.product.product_image;
    let quantity = this.product.product_quantity;
    let price = this.product.price;
    let user_id=+this.activateroute.snapshot.paramMap.get("uid");
    //let user_id=this.uservice.user_id;
    console.log(user_id)
    this.cart  = new Cart(0,name,image,quantity,price,user_id);
    this.service.saveToCart(this.cart).subscribe(data=>{
      console.log(data)
      this.route.navigateByUrl("/");
    });
  }
   

}
