
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
  existingFriends:Array<User>=[];
  showLoader:boolean = false;
  foundExistingFriends:boolean=false;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private friendService: FriendService){

  }
  ngOnInit():void{
    var friends:Array<User>=[];
    this.showLoader=true;
    this.friendService.getExistingFriends().then((friends:Array<User>)=>{

        this.friendService.getFriendSuggestion().then((friendSuggestios:Array<User>)=>{
          this.showLoader=false;
          for(var i=0; i< friendSuggestios.length;i++){
            friendSuggestios[i].friend=false;
          }
          this.users = friendSuggestios;
          console.log("The expected users");
          console.log(this.users);
        });
        this.foundExistingFriends=true;
        this.existingFriends = friends;

    });
  }

  addFriends():void{
    this.getAddedFriends().then((user)=>{
      this.showLoader=true;
      this.friendService.saveFriends(user).then((saveStatus:boolean)=>{
        this.ngOnInit();
      });
    })

  }

  getAddedFriends():Promise<Array<User>>{
    return new Promise<Array<User>>((resolve, reject)=>{
      var users:Array<User>=[];
      console.log(this.users);
      for(var i=0; i<this.users.length;i++){
        console.log(this.users[i].friend);
        if(this.users[i].friend==true)
          users.push(this.users[i]);
      }
      resolve(users);
    });

  }
}
