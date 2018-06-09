import { Component, OnInit } from '@angular/core';
import { PositionService } from '../_service/position.service';
import { Position } from '../model/position';
import { MessageService } from '../_service/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-position-add',
  templateUrl: './position-add.component.html',
  styleUrls: ['./position-add.component.css']
})
export class PositionAddComponent implements OnInit {

  position: Position;

  constructor(private _positionService: PositionService, 
              private _messageService: MessageService,
              private _router: Router) { }

  ngOnInit() {
    this.position = new Position();
  }

  create() {
    this._positionService.save(this.position).subscribe(data => {
      if (data != null) {
        this._messageService.setMessage("Stanowisko utworzone pomyślnie");
        this._router.navigate(['/positions']);
      } else {
        this._messageService.setMessage("Stanowisko już istnieje");
      }
    },
    error => {
      this._messageService.setMessage(error);
    });
  }

}
