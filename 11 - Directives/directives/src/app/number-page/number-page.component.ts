import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-page',
  templateUrl: './number-page.component.html',
  styleUrls: ['./number-page.component.css']
})
export class NumberPageComponent implements OnInit {
number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
