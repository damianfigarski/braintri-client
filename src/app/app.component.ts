import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  companyName = 'braintri';
  static API_URL = 'https://shielded-hollows-49238.herokuapp.com';
}
