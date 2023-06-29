import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { FriendsComponent } from './components/friends/friends.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PlayComponent } from './components/play/play.component';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { PageNotfoundComponent } from './components/page-notfound/page-notfound.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ButtonProfileComponent } from './components/button-profile/button-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    FriendsComponent,
    SettingsComponent,
    PlayComponent,
    ButtonComponent,
    HeaderComponent,
    PageNotfoundComponent,
    LoginPageComponent,
    ProfileComponent,
    ButtonProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
