import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  item: FirebaseObjectObservable<any>;
  items:FirebaseListObservable<any[]>;
  values:any[]=[];
  constructor( private db :AngularFireDatabase) {
        this.item = db.object('/items');
        this.items = db.list('items',{ preserveSnapshot: true });

        this.items
        .subscribe(snapshots => {
          if(this.values !=[]){
            this.values=[];
          }
          snapshots.forEach((snapshot) => {
            console.log(snapshot.key)
            console.log(snapshot.val())
             this.values.push(snapshot.val());
              });
            })



   }

   getValues(){
     console.log(this.values);
   }

  ngOnInit() {
  }

}
