import { Component, OnInit } from '@angular/core';
import {QlNotificationService} from "qloud-angular/package/notification/notification.service";

@Component({
  selector: 'app-campaign-activity',
  templateUrl: './campaign-activity.component.html',
  styleUrls: ['./campaign-activity.component.css']
})
export class CampaignActivityComponent implements OnInit {

    circlechartData1 = {
          "factorCode": "02",
          "amount": 190,
          "huanRatio": 57.14,
          "unamount": 70,
          "tongRatio": 50.57,
          "startDate": "2019/01/01",
          "endDate": "2019/12/31",
    };
    constructor(private notify: QlNotificationService) {
    }


    ngOnInit() {

    }

}
