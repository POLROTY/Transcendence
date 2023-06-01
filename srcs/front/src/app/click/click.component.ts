import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-click',
  templateUrl: './click.component.html',
  styleUrls: ['./click.component.css']
})
export class ClickComponent {
  counter = 0;

  constructor(private http: HttpClient) {}

  onClick() {
    this.http.post('http://localhost:3000/click', {})
      .subscribe((data: any) => {
        this.counter = data.clicks;
      });
  }
}
