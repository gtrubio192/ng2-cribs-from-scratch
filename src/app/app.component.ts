import { Component } from '@angular/core';

// '@' == decorator, here we have a Component decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'this app';
}
