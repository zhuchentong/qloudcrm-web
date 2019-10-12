import { Component, OnInit } from '@angular/core';
import {QlNotificationService} from "qloud-angular/package/notification/notification.service";

@Component({
  selector: 'app-customer-count',
  templateUrl: './customer-count.component.html',
  styleUrls: ['./customer-count.component.css']
})
export class CustomerCountComponent implements OnInit {

    circlechartData1 = {
          "factorCode": "02",
          "amount": 21098,
          "huanRatio": 12,
          "unamount": 70,
          "tongRatio": 15,
          "startDate": "2019/01/01",
          "endDate": "2019/12/31",
    };
    constructor(private notify: QlNotificationService) {
    }


    ngOnInit() {

    }

}
