import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/common/user';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  //user:User=new User(0," "," "," "," "," "," ");
  user:User[];
  user_name:String;
  password:String;
  user_id:number;
  constructor(private service:ServiceService,private route:Router,private activateroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activateroute.paramMap.subscribe(()=>{this.getAllUsers()})
   
  }
 
  getAllUsers() {
    
    this.service.getAllUsers().subscribe(data=>{
      console.log(data)
      this.user=data
    });
  }

  setUserId(){
    this.route.navigateByUrl("/userid/"+ this.user_id);
  }

  
  /*onSubmit():void{

    this.service.saveUser(this.user).subscribe(data=>console.log(data));
    this.route.navigateByUrl("/welcome");
  }*/
  
  validate() {
  
  const users=this.user.find((u:any)=>{
    if(u.user_name===this.user_name)
    {this.user_id=u.user_id}
     return u.user_name===this.user_name &&  u.password===this.password;

  });

  if(users){
    alert("Login Success");
    this.route.navigateByUrl('/')
  }
  else{
    alert("Please check your login details.");
  }
}
}
