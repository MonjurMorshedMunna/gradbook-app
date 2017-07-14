/**
 * Created by Munna on 14-Jul-17.
 */

import {Http, Headers, RequestOptions, RequestMethod} from '@angular/http';
import {Route, Router} from '@angular/router';

import 'rxjs/add/operator/toPromise';
import {Injectable, OnInit} from '@angular/core';
import {User} from "../models/User";
import {NotificationService} from "ng2-notify-popup";
import {NewsFeed} from "../models/NewsFeed";
@Injectable()
export class NewsFeedService {
  constructor(private http:Http, private router: Router, private notify: NotificationService){

  }


  getNewsFeeds():Promise<Array<NewsFeed>>{
    return new Promise<Array<NewsFeed>> ((resolve, reject)=>{
      let url = 'http://localhost:8333/newsFeed/getNewsFeed';
      this.getHeaders().then((header)=>{
        this.http.get(url, header)
          .toPromise()
          .then((response)=>{
            var newsFeed:Array<NewsFeed>=[];
            newsFeed = JSON.parse(response.text());
            this.notify.show("Success in getting data");
            resolve(newsFeed);
          })
          .catch((data)=>{
            console.error(data);
            this.notify.show("Error in getting newsfeed");
          });
      });
    });
  }


  saveNewsFeed(newsFeeds:NewsFeed):Promise<boolean>{
    console.log(newsFeeds);
    var url:string = 'http://localhost:8333/newsFeed/saveNewsFeed';
    return new Promise<boolean>((resolve, reject)=>{
      this.getHeaders().then((headers)=>{

        this.http.post(url, JSON.stringify(newsFeeds), headers)
          .toPromise()
          .then((response)=>{
            this.notify.show("Successfully saved");
            resolve(true);
          })
          .catch((data)=>{
            this.notify.show("Error in saving newsfeed");
            console.log(data);
            resolve(false);
          });
      });
    });
  }


  getHeaders():Promise<any>{
    var headers: any = new Headers();
    headers.append("Authorization", "Bearer "+ localStorage.getItem('token'));
    headers.append("Accept", "application/json");
    headers.append('Content-Type' , 'application/json');
    let options = new RequestOptions({headers:headers});
    return Promise.resolve(options);
  }
}
