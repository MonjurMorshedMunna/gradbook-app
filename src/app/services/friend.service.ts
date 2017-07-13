/**
 * Created by Munna on 13-Jul-17.
 */

import {Http, Headers, RequestOptions, RequestMethod} from '@angular/http';
import {Route, Router} from '@angular/router';

import 'rxjs/add/operator/toPromise';
import {Injectable} from '@angular/core';


@Injectable()
export class FriendService{

  constructor(private http:Http, private router: Router){

  }

  getInitialAll():void{
    var user:any = {};
    console.log("In the initial all");
    let userUrl='http://localhost:8222/all';
    console.log(userUrl);
    this.headers().then((options)=>{
       this.http.get(userUrl, options)
        .toPromise()
        .then((response)=>{
         console.log(response.text());
       })
        .catch((data)=>{
        console.log(data);
        });
    });

  }

  headers():Promise<any>{

    var headers: any = new Headers();
    headers.append("Authorization", "Bearer "+ localStorage.getItem('token'));
    headers.append("Accept", "application/json");
    headers.append('Content-Type' , 'application/x-www-form-urlencoded; charset=UTF-8');
    let options = new RequestOptions({headers:headers});
    return Promise.resolve(options);
  }

}
