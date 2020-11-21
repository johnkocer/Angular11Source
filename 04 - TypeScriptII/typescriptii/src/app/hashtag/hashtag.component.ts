import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-hashtag',
  templateUrl: './hashtag.component.html',
  styleUrls: ['./hashtag.component.css']
})
export class HashtagComponent implements OnInit {
@ViewChild('name') name: ElementRef;
  constructor() { }

  ngOnInit() {

    var customer = {
      name: "John",
      city: ""
   };
   if (!customer.name) {
      console.log("name IS null or undefined");
   } else {
      console.log("name is NOT null or undefined");
   }
   if (!customer.city) {
      console.log("city IS null or undefined");
   } else {
      console.log("city is NOT null or undefined");
   }

  }
buttonClick(value){
  console.log(value);
  console.log(this.name.nativeElement.value);
}
}
