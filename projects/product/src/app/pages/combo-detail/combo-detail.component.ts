import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { ApiService as MarketingService } from 'projects/marketing/src/app/services/api.service'
import { ApiService } from './../../../../../dashboard/src/app/services/dashboard.service';
import { ApiService as CustomerService } from 'projects/customer/src/app/services/api.service'

@Component({
  selector: 'app-combo-detail',
  templateUrl: './combo-detail.component.html',
  styleUrls: ['./combo-detail.component.scss'],
  providers:[ApiService]
})
export class ComboDetailComponent implements OnInit {
  public id
  public activityList:any = []
  public groupList:any = []

  constructor(private route: ActivatedRoute,private apiServicemark:MarketingService,private apiServicecustomer:CustomerService) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')

    this.getComboDetail()

    this.apiServicemark.getActivityList().subscribe(data => {
      this.activityList = data
    })

    this.apiServicecustomer.getCustomerGroupList().subscribe(data => {
      this.groupList = data
    })
  }

  getComboDetail() {}
}
