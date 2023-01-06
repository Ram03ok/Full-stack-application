import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  product:Product[];
  product_id:number;
  name:String;
  constructor(private route:Router,private service:ServiceService) { }

  ngOnInit(): void {
  }
  loginForm(){
    this.route.navigateByUrl("/login");
  }

  goToSeller(){
    this.route.navigateByUrl("/sellerlogin");
  }

  searchByName(name:String){
    this.service.getAllProducts().subscribe(data=>{
      this.product=data});
      
  const products=this.product.find((u)=>{
    if(u.product_name.toLowerCase()==this.name.toLowerCase())
    {this.product_id=u.product_id }
    console.log(this.product_id)
     return u.product_id===this.product_id 
  });
  if(products){
  this.route.navigateByUrl("/details/"+ this.product_id);
  }
  else{
    alert("product not avilable.");
  }
  }
}
