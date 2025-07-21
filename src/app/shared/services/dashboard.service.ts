import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DashboardContent, Employee } from '../model/dashboard.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
 private apiUrl = 'http://localhost:3000/dashboardContent';

  constructor(private http: HttpClient) {}

  getDashboardContent(): Observable<DashboardContent> {
    return this.http.get<DashboardContent>(this.apiUrl);
  }


}
export const summary = [
  {
    "id": 1,
    "title": "Total Employees",
    "value": 0
  },
  {
    "id": 2,
    "title": "Active Employees",
    "value": 0
  },
  {
    "id": 3,
    "title": "Inactive Employees",
    "value": 0
  },
  {
    "id": 4,
    "title": "On Leave Employees",
    "value": 0
  }
]
export const updateSummaryCounts = (employees: Employee[], summaryArray: any[]) => {
    const totalEmployees = employees.length;
    const activeEmployees = employees.filter(emp => emp.status.toLowerCase() === 'active').length;
    const inactiveEmployees = employees.filter(emp => emp.status.toLowerCase() === 'inactive').length;
    const onLeaveEmployees = employees.filter(emp => emp.status.toLowerCase() === 'on leave' || emp.status.toLowerCase() === 'leave').length;

    return summaryArray.map(item => {
      switch (item.title) {
        case 'Total Employees':
          return { ...item, value: totalEmployees };
        case 'Active Employees':
          return { ...item, value: activeEmployees };
        case 'Inactive Employees':
          return { ...item, value: inactiveEmployees };
        case 'On Leave Employees':
          return { ...item, value: onLeaveEmployees };
        default:
          return item;
      }
    });
  };