import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  message: string;
  display: boolean = false;

  constructor() { }

  setMessage(message: string) {
    this.message = message;
    this.display = true;

    setTimeout(function() {
      this.display = false;
    }.bind(this), 5000);
  }

}
