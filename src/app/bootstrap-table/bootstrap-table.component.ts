import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employeeTable',
  templateUrl: './bootstrap-table.component.html',
  styleUrls: ['./bootstrap-table.component.css']
})
export class BootstrapTableComponent implements OnInit {
  employees:any;
  default = 'white';

  constructor(service:EmployeeService) {this.employees = service.getEmployees(); }

  ngOnInit(): void {
  }

  highlight(){
    this.default = "red";
  }

  delight(){
    this.default = "white";
  }

}
