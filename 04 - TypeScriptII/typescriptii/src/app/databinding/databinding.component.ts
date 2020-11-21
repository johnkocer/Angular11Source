import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
title:string="Data Binding";
imagePath:string='../../assets/images/BlueRose.jpg';
isDisabled:boolean=false;

  ngOnInit() {
  }
togle(){
  this.isDisabled =this.isDisabled == true? false: true;
}
}
