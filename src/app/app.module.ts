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
import {NgNotifyPopup, NotificationService} from "ng2-notify-popup";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule, MdButtonModule, MdCheckboxModule} from "@angular/material";
import {NewsFeedService} from "./services/newsfeed.service";

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
    NgNotifyPopup,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MaterialModule
  ],
  providers: [
    FriendService,
    NewsFeedService,
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
