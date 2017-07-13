
import {Component, OnInit} from "@angular/core";
import {User} from "../models/User";
import {FriendService} from "../services/friend.service";
import {ActivatedRoute, Router} from "@angular/router";



@Component({
  selector:'friends',
  templateUrl:'./friends.component.html'
})

export class FriendsComponent implements OnInit{

  users:Array<User>=[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private friendService: FriendService){

  }
  ngOnInit():void{
    var friends:Array<User>=[];
    this.friendService.getExistingFriends().then((friends:Array<User>)=>{
      if(friends.length==0){
        this.friendService.getFriendSuggestion().then((friendSuggestios:Array<User>)=>{
          for(var i=0; i< friendSuggestios.length;i++){
            friendSuggestios[i].friend=false;
          }
          this.users = friendSuggestios;
          console.log(this.users);
        });
      }
    });
  }

  addFriends():void{
    console.log(this.users);
  }
}
