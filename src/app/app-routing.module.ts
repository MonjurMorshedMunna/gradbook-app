
import {RouterModule, Routes} from "@angular/router";
import {NewsfeedComponent} from "./newsfeed/newsfeed.component";
import {MessageComponent} from "./message/message.component";
import {FriendsComponent} from "./friends/friends.component";
import {NgModule} from "@angular/core";



const routes:Routes = [
  {path:'', redirectTo:'newsfeed', pathMatch:'full'},
  {path:'newsfeed', component: NewsfeedComponent},
  {path:'message', component: MessageComponent},
  {path:'friends', component: FriendsComponent}
];


@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule{

}
