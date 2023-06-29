import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-profile',
  templateUrl: './button-profile.component.html',
  styleUrls: ['./button-profile.component.css']
})
export class ButtonProfileComponent {

  isLoggedIn: boolean = true;

  @Output() btnClick = new EventEmitter();

  goProfile() {
    this.btnClick.emit();
  }

}
