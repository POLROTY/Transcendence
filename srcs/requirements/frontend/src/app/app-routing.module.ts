import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { FriendsComponent } from './components/friends/friends.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PlayComponent } from './components/play/play.component';
import { PageNotfoundComponent } from './components/page-notfound/page-notfound.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {path: '', component: MainMenuComponent},
  {path: 'Profile', component: ProfileComponent},
  {path: 'play', component: PlayComponent},
  {path: 'friends', component: FriendsComponent},
  {path: 'settings', component: SettingsComponent},
  {path: '**', component: PageNotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
