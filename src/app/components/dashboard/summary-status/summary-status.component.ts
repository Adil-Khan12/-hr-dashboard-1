import { Component, Input, OnInit } from '@angular/core';
import { DashboardSummaryItem } from 'src/app/shared/model/dashboard.model';

@Component({
  selector: 'app-summary-status',
  templateUrl: './summary-status.component.html',
  styleUrls: ['./summary-status.component.scss']
})
export class SummaryStatusComponent implements OnInit {
  @Input() summary!: DashboardSummaryItem[];
  constructor() { }

  ngOnInit(): void {
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
}
