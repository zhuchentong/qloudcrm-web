import { Component, OnInit } from '@angular/core'
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit {
  public activityList: any[] = []
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getActivityList()
  }

  getActivityList() {
    this.apiService.getActivityList().subscribe(data => {
      this.activityList = data
    })
  }
}
