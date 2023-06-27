import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
 
  @Input() text!:   string;
  @Input() color!:  string;

  Hover(over: boolean) {
    this.color = over ? 'white' : '#FFDE56';
  }

}
