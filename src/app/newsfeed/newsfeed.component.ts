
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";



@Component({
  selector:'newsfeed',
  templateUrl:'./newsfeed.component.html'
})

export class NewsfeedComponent implements OnInit{

  private sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router){

  }
  ngOnInit():void{
    this.sub = this.route.queryParams.subscribe((params:Params)=>{
      console.log(params['token']);
    });
  }
}
