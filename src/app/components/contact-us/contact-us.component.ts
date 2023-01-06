import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { userInfo } from 'os';
import { User } from 'src/app/common/user';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
 
  user:User=new User(0,"","","","","","",+91);
    constructor(private service:ServiceService,private route:Router,private activateroute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  onSubmit():void{

    this.service.saveUser(this.user).subscribe(data=>console.log(data));
    this.route.navigateByUrl("/contact-us");
  }
}
