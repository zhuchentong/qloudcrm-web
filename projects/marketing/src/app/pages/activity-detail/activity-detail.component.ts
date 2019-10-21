import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.scss']
})
export class ActivityDetailComponent implements OnInit {
  public ladderList = [
    {
      time: '2019-10-01 - 2019-10-05',
      targetList: [
        {
          type: '销售额',
          value: '100,000.00元'
        },
        {
          type: '客户访问量',
          value: '200,000次'
        }
      ],
      productList: [],
      interestList: []
    }
  ]

  constructor() {}

  ngOnInit() {}
}
