import { Component } from '@angular/core';
import { Router } from '@angular/router';

enum HeaderDisplay {
  Main = 1,
  Game = 2,
  Friends = 3,
  Profile = 4,
  Settings = 5,
  Login = 0,
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  constructor(private router: Router, private headerDisplay: HeaderDisplay) {

  }
  
  // whichHeaderRoute(): number {
  //   let route: string = this.router.url;
  //   console.log(route);
  //   // route = route.slice();
  //   // switch ()
    
  //   return 3;
  // }

}
