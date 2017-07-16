import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GithubService {
private userName:string;
  constructor(private _http:Http) {
    console.log("github service is ready");
    this.userName = "batout";
  }

  getUsers(username:string){
    return this._http.get('http://api.github.com/users/'+username+"?client_id=c280edc1e9ef90f6e4d6&client_secret=ec97a016b045829c69f21e7d6a32511bc7b17002")
    .map((res) => {return res.json()})
  }

  getRepos(username:string){
    return this._http.get('http://api.github.com/users/'+username+'/repos'+"?client_id=c280edc1e9ef90f6e4d6&client_secret=ec97a016b045829c69f21e7d6a32511bc7b17002")
    .map((res) => {return res.json()})
  }
}
