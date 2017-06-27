import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: FirebaseListObservable<any[]>;
  constructor( private db :AngularFireDatabase) {
        this.items = db.list('/items');

   }

  ngOnInit() {
  }

}
