import { Component, OnInit } from '@angular/core';
import {GithubService} from '../../services/github.service';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user;
  repos:Array<object>;

  username:string;
  constructor(private _githubService:GithubService) {

   }

  ngOnInit() {
  }
  searchUser(){
    if (this.username !=="") {
      this._githubService.getUsers(this.username)
      .subscribe((user)=>{
        this.user = user;
      })
      this._githubService.getRepos(this.username)
      .subscribe(
        (repos)=>{
          this.repos = repos;
        }
      )
    }else{
      this.user = false;
    }

  }
}
