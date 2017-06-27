import {Component} from '@angular/core';
@Component({
  selector:'navbar',
  templateUrl:'./navbar.component.html',
  styleUrls:['./navbar.component.css']
})

export class NavbarComponent{

  websiteName:string;
  constructor(){
    this.websiteName = 'A2 testing website';
  }
}
