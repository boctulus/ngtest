import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('body').on('click', '.navbar-toggler', ()=>{
      this.toogle();
    });
  }

  toogle(){
    $('.navbar-collapse').toggleClass('show');
  }

}
