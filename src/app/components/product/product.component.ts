import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Product[]
  
  constructor( private poddata:ServiceService,private route:Router,private activateroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts() 
  {
   this.poddata.getAllProducts().subscribe(data=>{
     this.products=data
     console.log(this.products)
    });
 }
 

  goToCart(product_id:number){
    this.route.navigateByUrl("/details/"+ product_id);
  }
  
}


