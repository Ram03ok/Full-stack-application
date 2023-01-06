import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/common/category';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[] 
  
  constructor( private catdata:ServiceService) { }

  ngOnInit(): void {
    this.getAllCategory();
  }

  getAllCategory(){
    this.catdata.getAllCategory().subscribe(data=>{
      this.categories=data});
  }
 

}
