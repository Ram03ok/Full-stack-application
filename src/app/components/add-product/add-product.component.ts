import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product:Product=new Product(0," "," ",0," "," "," ",0,0);
  constructor(private service:ServiceService,private route:Router,private activatedroute:ActivatedRoute) { }

  editable:boolean=false;
  ngOnInit(): void {
   this.activatedroute.paramMap.subscribe(()=>{this.getProductById()});

  }
  getProductById() {
    const product_id =+this.activatedroute.snapshot.paramMap.get("id");
    if(product_id>0)
    {
      this.editable=true;
      this.service.getProductById(product_id).subscribe(data => {this.product=data});
    }
  }

  /*onSubmit(){
    console.log(this.product);
    this.service.saveProduct(this.product).subscribe(data=>{this.product=data});
    this.route.navigateByUrl("/seller");
  }*/

  onSubmit()
  {
    if(this.editable)
    {
      this.service.updateProduct(this.product).subscribe(data=>{
        console.log(data)
        this.route.navigateByUrl("/seller"); 
      });
    }
    else{
    console.log(this.product);
    this.service.saveProduct(this.product).subscribe(data=>{
      console.log(data)
      this.route.navigateByUrl("/seller");
    });
    }
  }



}
