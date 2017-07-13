
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {FriendService} from "../services/friend.service";
import {User} from "../models/User";



@Component({
  selector:'message',
  templateUrl:'./message.component.html'
})

export class MessageComponent implements OnInit{

  users:Array<User>=[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private friendService: FriendService){

  }
  ngOnInit():void{
    this.friendService.getExistingFriends().then((friends:Array<User>)=>{
      console.log(friends);
    });
  }
}
