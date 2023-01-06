import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  products:Product[];
  constructor( private service:ServiceService,private route:Router,private activateroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activateroute.paramMap.subscribe(()=>{this.getAllProducts()});
  }
  getAllProducts() {
    this.service.getAllProducts().subscribe(data=>{
      this.products=data
    });
  }

  addEmpForm():void{
    this.route.navigateByUrl("/addproduct");
  }

  updateProduct(product_id:number):void{
    this.route.navigateByUrl("/editPro/"+product_id);  
  }

  deleteProduct(product_id:number): void
  {
    if(confirm("Do you want to delete"))
    {
          this.service.deleteProduct(product_id).subscribe(data=>
            {
              console.log("deleted") 
        this.getAllProducts();
      })
    }
  }
}
