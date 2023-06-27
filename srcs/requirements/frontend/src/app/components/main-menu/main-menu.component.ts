import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/log.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  isLogged: boolean = false;
  subscription!: Subscription;

  constructor(private logService: LogService) {
    // this.isLogged = this.logService
    // .isLogged()
    // .subscribe( (value) => (this.isLogged = value) );
  }

  ngOnInit(): void {}

}
