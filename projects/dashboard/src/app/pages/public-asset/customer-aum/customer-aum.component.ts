import { Component, OnInit } from '@angular/core';
import {QlNotificationService} from "qloud-angular/package/notification/notification.service";

@Component({
  selector: 'app-customer-aum',
  templateUrl: './customer-aum.component.html',
  styleUrls: ['./customer-aum.component.css']
})
export class CustomerAumComponent implements OnInit {

    circlechartData1 = {
          "factorCode": "02",
          "amount": 30000,
          "huanRatio": 8,
          "unamount": 70,
          "tongRatio": 21,
          "startDate": "2019/01/01",
          "endDate": "2019/12/31",
    };
    constructor(private notify: QlNotificationService) {
    }


    ngOnInit() {

    }

}
