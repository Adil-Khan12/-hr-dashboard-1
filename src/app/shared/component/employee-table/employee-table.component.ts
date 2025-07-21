import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/shared/model/employee.model';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { capatalizedFirstCharacter } from 'src/app/utils/utils';
import { SharedService } from 'src/app/shared/services/shared.service';
@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss']
})
export class EmployeeTableComponent implements OnInit {
  @Input() className!: string;
  @Input() tableContainerDashboard!: string;
  @Input() infoHeaderDashboard!: string;
  employees: Employee[] = [];
  capitalFirstCharactor = capatalizedFirstCharacter;
  constructor(private employeeService_: EmployeeService, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.getEmployees();
    
  }
  getEmployees(){
    this.employeeService_.getEmployees().subscribe((data) => {
      this.employees = data;
    });
    this.sharedService.results$.subscribe((data:Employee[]) => {
      this.employees = data;
    });
  }

}
