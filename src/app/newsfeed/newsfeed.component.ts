
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {FriendService} from "../services/friend.service";
import {NewsFeed} from "../models/NewsFeed";
import {NewsFeedService} from "../services/newsfeed.service";



@Component({
  selector:'newsfeed',
  templateUrl:'./newsfeed.component.html'
})

export class NewsfeedComponent implements OnInit{

  newsFeeds:Array<NewsFeed>=[];
  newNewsFeed:NewsFeed = <NewsFeed>{};
  private sub: Subscription;
  showLoader:boolean = false;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private friend: FriendService,
              private newsFeedService: NewsFeedService){

  }
  ngOnInit():void{

    this.sub = this.route.queryParams.subscribe((params:Params)=>{

      this.saveToken(params['token']).then((status)=>{
        console.log("after saving token");
        this.getNewsFeed();
      });

    });

    this.getNewsFeed();

  }


  saveToken(token:any):Promise<boolean>{
    return new Promise<boolean>((resolve, reject)=>{
      if(token!=null){
        console.log("params found");
        localStorage.removeItem('token');
        localStorage.setItem('token',token);
      }
    });
  }



  private getNewsFeed() {
    this.newsFeeds = [];
    this.showLoader = true;
    this.newsFeedService.getNewsFeeds().then((newsFeeds: Array<NewsFeed>) => {
      this.showLoader = false;
      console.log("gettng newsfeeds");
      console.log(newsFeeds);
      this.newsFeeds = newsFeeds;
    });
  }

  savePost():void{
    this.showLoader=true;
    this.newsFeedService.saveNewsFeed(this.newNewsFeed).then((status:boolean)=>{
      this.showLoader=false;
      if(status){
        this.newNewsFeed = <NewsFeed>{};
        this.ngOnInit();
      }
    });
  }

  fetchAll():void{
    console.log("Fetch all");
    this.friend.getInitialAll();
  }
}
