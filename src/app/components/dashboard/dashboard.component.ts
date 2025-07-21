import { Component, OnInit } from '@angular/core';
import { DashboardContent, DashboardSummaryItem, Employee } from 'src/app/shared/model/dashboard.model';
import { DashboardService } from '../../shared/services/dashboard.service';
import { capatalizedFirstCharacter } from 'src/app/utils/utils';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { ChartDataPoint } from 'src/app/shared/component/performance-chart/performance-chart.component';
import { summary, updateSummaryCounts } from '../../shared/services/dashboard.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  employeeStatusChartData: ChartDataPoint[] = [];
  summary: DashboardSummaryItem[] = summary;
  employeeList: any[] = [];
  activities: any[] = [];
  capitalFirstCharactor = capatalizedFirstCharacter;
  
  constructor(private dashboardService_: DashboardService, private employeeService_: EmployeeService) { }
  ngOnInit(): void {
    this.getDashboardContent();
  }
  

  private getEmployeeStatusDistribution(employees: Employee[]): ChartDataPoint[] {
    const statusCounts: { [key: string]: number } = {};
    employees.forEach(emp => {
      const status = emp.status.toLowerCase();
      statusCounts[status] = (statusCounts[status] || 0) + 1;
    });

    return Object.keys(statusCounts).map(status => ({
      label: status.charAt(0).toUpperCase() + status.slice(1), // Capitalize first letter
      value: statusCounts[status]
    }));
  }
  getIconClass(icon: string): string {
    switch (icon) {
      case 'Total Employees':
        return 'bx bxs-group';
      case 'Active Employees':
        return 'bx bxs-user-check';
      case 'Inactive Employees':
        return 'bx bxs-user-x';
      case 'On Leave Employees':
        return 'bx bx-user-x';
      default:
        return '';
    }
  }
  getDashboardContent(){
    this.dashboardService_.getDashboardContent().subscribe((data) => {
      this.employeeList = data?.employee_list;
      this.summary = updateSummaryCounts(this.employeeList, this.summary);
      this.activities = data?.activities;
      this.employeeStatusChartData = this.getEmployeeStatusDistribution(this.employeeList);
    });
  }
}
