import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NewsfeedComponent} from "./newsfeed/newsfeed.component";
import {MessageComponent} from "./message/message.component";
import {FriendsComponent} from "./friends/friends.component";
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {FriendService} from "./services/friend.service";
import {NgNotifyPopup} from "ng2-notify-popup";

@NgModule({
  declarations: [
    AppComponent,
    NewsfeedComponent,
    MessageComponent,
    FriendsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    NgNotifyPopup
  ],
  providers: [
    FriendService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
