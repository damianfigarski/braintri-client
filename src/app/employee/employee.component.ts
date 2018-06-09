import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../_service/employee.service';
import { Employee } from '../model/employee';
import { MessageService } from '../_service/message.service';
import { Router } from '@angular/router';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  animations: [
    trigger('employees', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: .3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
          ]))
        ]), { optional: true })
      ])
    ])
  ]
})
export class EmployeeComponent implements OnInit {

  employees: Array<Employee>;
  search: string;

  constructor(private _employeeService: EmployeeService, private _messageService: MessageService) { }

  ngOnInit() {
    this._employeeService.getAll().subscribe(data => {
      this.employees = data;
    });
  }

  deleteEmployee(id: number) {
    this._employeeService.delete(id).subscribe(data => {
      this._messageService.setMessage('Pomyślnie usunięto pracownika');
      this._employeeService.getAll().subscribe(data => {
        this.employees = data;
      });
    }, error => {
      this._messageService.setMessage(error);
    });
  }

  searchEmployee() {
    if (this.search != null) {
      this._employeeService.search(this.search).subscribe(data => {
        this.employees = data;
      });
    } else {
      this._employeeService.getAll().subscribe(data => {
        this.employees = data;
      });
    }
  }

}
