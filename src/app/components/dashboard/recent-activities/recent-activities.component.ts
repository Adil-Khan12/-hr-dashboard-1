import { Component, Input, OnInit } from '@angular/core';
import { Activity } from 'src/app/shared/model/dashboard.model';
@Component({
  selector: 'app-recent-activities',
  templateUrl: './recent-activities.component.html',
  styleUrls: ['./recent-activities.component.scss']
})
export class RecentActivitiesComponent implements OnInit {
  @Input() activities!: Activity[];
  constructor() { }

  ngOnInit(): void {
    console.log(this.activities);
  }


}
