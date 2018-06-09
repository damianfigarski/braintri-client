import { Component, OnInit } from '@angular/core';
import { PositionService } from '../_service/position.service';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css'],
  animations: [
    trigger('positions', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateX(-75%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateX(35px)', offset: .3 }),
            style({ opacity: 1, transform: 'translateX(0)', offset: 1 })
          ]))
        ]), { optional: true })
      ])
    ])
  ]
})
export class PositionComponent implements OnInit {

  positions: Array<Position>;

  constructor(private _positionService: PositionService) { }

  ngOnInit() {
    this._positionService.getAll().subscribe(data => {
      this.positions = data;
    });
  }

}
