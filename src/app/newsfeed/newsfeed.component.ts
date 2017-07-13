
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {FriendService} from "../services/friend.service";



@Component({
  selector:'newsfeed',
  templateUrl:'./newsfeed.component.html'
})

export class NewsfeedComponent implements OnInit{

  private sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private friend: FriendService){

  }
  ngOnInit():void{
    this.sub = this.route.queryParams.subscribe((params:Params)=>{
      if(params['token']!=null){
        console.log("params found");
        localStorage.removeItem('token');
        localStorage.setItem('token', params['token']);


      }

    });
  }

  fetchAll():void{
    console.log("Fetch all");
    this.friend.getInitialAll();
  }
}
