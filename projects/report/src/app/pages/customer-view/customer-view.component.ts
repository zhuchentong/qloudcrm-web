import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit {
  constructor() {}

  customerList = [
    {
      "customerLevel":"私行客户（600万以上）", "count":50, "enableCount": 49,
      "newCount":10, "lostCount":2, "upCount":5, "downCount": 3, "activeCount":34, "amount": 100
     },
    {
      "customerLevel":"钻石客户（300万-600万）", "count":100, "enableCount": 89,
      "newCount":10, "lostCount":2, "upCount":5, "downCount": 3, "activeCount":34, "amount": 100
    },
    {
      "customerLevel":"白金客户（100万-300万）", "count":50, "enableCount": 49,
      "newCount":10, "lostCount":2, "upCount":5, "downCount": 3, "activeCount":34, "amount": 100
    },
    {
      "customerLevel":"黄金客户（50万-100万）", "count":50, "enableCount": 49,
      "newCount":10, "lostCount":2, "upCount":5, "downCount": 3, "activeCount":34, "amount": 100
    },
    {
      "customerLevel":"白银客户（20万-50万）", "count":50, "enableCount": 49,
      "newCount":10, "lostCount":2, "upCount":5, "downCount": 3, "activeCount":34, "amount": 100
    },
    {
      "customerLevel":"优质客户（5万-20万）", "count":9830, "enableCount": 9825,
      "newCount":198, "lostCount":98, "upCount":100, "downCount": 43, "activeCount":9800, "amount": 1879
    },
    {
      "customerLevel":"大众客户（0-1万）", "count":50, "enableCount": 49,
      "newCount":10, "lostCount":2, "upCount":5, "downCount": 3, "activeCount":34, "amount": 100
    },
    {
      "customerLevel":"价值客户（1万-5万）", "count":50, "enableCount": 49,
      "newCount":10, "lostCount":2, "upCount":5, "downCount": 3, "activeCount":34, "amount": 100
    },
  ];


  ngOnInit() {}
}
