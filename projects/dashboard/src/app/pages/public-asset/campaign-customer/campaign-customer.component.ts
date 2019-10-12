import { Component, OnInit } from '@angular/core';
import {QlNotificationService} from "qloud-angular/package/notification/notification.service";

@Component({
  selector: 'app-campaign-customer',
  templateUrl: './campaign-customer.component.html',
  styleUrls: ['./campaign-customer.component.css']
})
export class CampaignCustomerComponent implements OnInit {

    circlechartData1 = {
          "factorCode": "02",
          "amount": 1900,
          "huanRatio": 37.08,
          "unamount": 70,
          "tongRatio": 20,
          "startDate": "2019/01/01",
          "endDate": "2019/12/31",
    };
    constructor(private notify: QlNotificationService) {
    }


    ngOnInit() {

    }

}
