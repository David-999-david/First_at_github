import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  currentDate : number | any = '';
  currentMonth : number | any = '';
  currentYear : number | any = '';

  ngOnInit(): void {
    this.getDate();
    this.getMonth();
    this.getYear();
  }

  getDate() : void {
    this.currentDate = new Date().getDate()
  }
  
  getMonth() : void {
    this.currentMonth = new Date().getMonth()
  }

  getYear() : void {
    this.currentYear = new Date().getFullYear()
  }
}
