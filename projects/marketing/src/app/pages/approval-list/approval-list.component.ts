import { Component, OnInit } from '@angular/core'
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-approval-list',
  templateUrl: './approval-list.component.html',
  styleUrls: ['./approval-list.component.scss']
})
export class ApprovalListComponent implements OnInit {
  public activityList: any[] = []
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getActivityList()
  }

  getActivityList() {
    this.apiService.getActivityList().subscribe(data => {
      console.log(data)
      this.activityList = data
    })
  }
}
