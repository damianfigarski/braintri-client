import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeService } from '../_service/employee.service';
import { PositionService } from '../_service/position.service';
import { Position } from '../model/position';
import { Router } from '@angular/router';
import { MessageService } from '../_service/message.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  employee: Employee;
  positions: Array<Position>

  constructor(private _employeeService: EmployeeService, private _positionService: PositionService,
    private _messageService: MessageService, private _router: Router) { }

  ngOnInit() {
    this.employee = new Employee();
    this.employee.position = new Position();
    this._positionService.getAll().subscribe(data => {
      this.positions = data;
    });
  }

  create() {
    this._employeeService.save(this.employee).subscribe(data => {
      this._messageService.setMessage("Pracownik dodany pomyślnie");
      this._router.navigate(['/employees']);
    },
    error => {
      this._messageService.setMessage(error);
    });
  }

}
