import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Seller } from 'src/app/common/seller';
import { SellerServiceService } from 'src/app/Service/seller-service.service';

@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.css']
})
export class SellerLoginComponent implements OnInit {

  seller:Seller[]
  seller_name:String;
  seller_id:number;
  constructor(private service:SellerServiceService,private route:Router,private activateroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activateroute.paramMap.subscribe(()=>{this.sellerList()})
  }
  sellerList() {
    this.service.getAllSeller().subscribe(data=>{
      console.log(data);
      this.seller=data
    })
  }

  validate() {
    const sellers=this.seller.find((s:any)=>{console.log(this.seller_name)
      return s.seller_name===this.seller_name 
    });

    if(sellers){
      alert("Login Success");
      this.route.navigateByUrl('/seller')
    }
    else{
      alert("Access Denied");
    }
  }

}
