/**
 * Created by Munna on 13-Jul-17.
 */

import {Http, Headers, RequestOptions, RequestMethod} from '@angular/http';
import {Route, Router} from '@angular/router';

import 'rxjs/add/operator/toPromise';
import {Injectable, OnInit} from '@angular/core';
import {User} from "../models/User";
import {NotificationService} from "ng2-notify-popup";


@Injectable()
export class FriendService implements OnInit{

  header:any={};

  constructor(private http:Http,
              private router: Router,
              private notify: NotificationService){

  }

  ngOnInit():void{
    console.log("In the initial phrase");
    this.headers().then((options)=>{
      this.header = options;
      this.getExistingFriends().then((users:Array<User>)=>{
        console.log("users");
        console.log(users);
      });
    });
  }

  saveFriends(users:Array<User>):Promise<boolean>{
    var url:string = 'http://localhost:8222/userFriend/saveFriends';
    var successStatus:boolean = false;
    return new Promise<boolean>((resolve, reject)=>{
      this.headers().then((headers)=>{
        this.http.post(url, JSON.stringify(users), headers)
          .toPromise()
          .then((response)=>{
            this.notify.show("Successfully Saved!");
            resolve(true);
          })
          .catch((data)=>{
            this.notify.show("Saving failed!");
            resolve(false);
          });
      });
    });
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


  getExistingFriends():Promise<any>{
    console.log("In the existing friends");
    return new Promise<Array<User>>((resolve, reject)=>{
        let url='http://localhost:8222/userFriend/existingFriends';
        var users:any={};
        this.headers().then((header)=>{
           this.http.get(url, header)
            .toPromise()
            .then((response)=> {
             console.log(response);
              response.json().data as Array<User>
              var users:Array<User> = [];
              users = JSON.parse(response.text()) ;
              console.log('users json');
              console.log(users);
              resolve(users);

            })
            .catch((data)=>{
              console.log(data);
            });
        })
      });


  }

  getFriendSuggestion():Promise<Array<User>>{
    let url='http://localhost:8222/userFriend/friendSuggestion';
    return new Promise<Array<User>>((resolve, reject)=>{
      this.headers().then((header)=>{
        this.http.get(url, header)
          .toPromise()
          .then((response)=>{
            var user:Array<User> = [];
            user = JSON.parse(response.text());
            resolve(user);
          })
          .catch((data)=>{
            console.error(data);
          })
      });
    });

  }

  headers():Promise<any>{

    var headers: any = new Headers();
    headers.append("Authorization", "Bearer "+ localStorage.getItem('token'));
    headers.append("Accept", "application/json");
    headers.append('Content-Type' , 'application/json');
    let options = new RequestOptions({headers:headers});
    return Promise.resolve(options);
  }

}
