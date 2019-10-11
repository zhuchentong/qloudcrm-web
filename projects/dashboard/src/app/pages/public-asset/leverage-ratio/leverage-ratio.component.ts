import { Component, OnInit } from '@angular/core';
import {QlNotificationService} from "qloud-angular/package/notification/notification.service";

@Component({
  selector: 'app-leverage-ratio',
  templateUrl: './leverage-ratio.component.html',
  styleUrls: ['./leverage-ratio.component.css']
})
export class LeverageRatioComponent implements OnInit {


    circlechartOption3: Array<any> = [{
        grid: {
            top: 5,
            bottom: 5,
        },
        color: ['#f5f5f5', '#27ae60'],
        series: [{
            name: 'valueOfMarket',
            type: 'pie',
            center: ['50%', '50%'], // 饼图的圆心坐标
            radius: ['55%', '70%'],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            label: { //  饼图图形上的文本标签
                normal: { // normal 是图形在默认状态下的样式
                    show: false
                }
            },
            data: [
                {
                    // value: 54,
                    value: '',
                    name: '',
                    label: {
                        normal: {
                            show: true
                        }
                    }
                },
                {
                    // value: 46,
                    value: '',
                    label: {
                        normal: {
                            show: false
                        }
                    }
                }
            ]
        }]
    }];
    loading = false;
    circlechartData3: any;
    constructor(private notify: QlNotificationService) {
    }

    /*查询*/
    query() {
        var res = {
          "ret": [
            {
              "retCode": "000000",
              "retMsg": "success"
            }
          ],
          "result": {
            "11": {
              "factorCode": "11",
              "amount": 0.0,
              "count": 100,
              "unamount": 0.0,
              "uncount": 65,
              "dataDate": "2019-01-28"
            },
            "12": {
              "factorCode": "12",
              "amount": 0.0,
              "count": 56,
              "unamount": 0.0,
              "uncount": 136,
              "dataDate": "2019-01-28"
            },
            "02": {
              "factorCode": "02",
              "amount": 934000.0,
              "count": 10,
              "unamount": 630000.0,
              "uncount": 10,
              "dataDate": "2019-01-02"
            },
            "13": {
              "factorCode": "13",
              "amount": 120000.0,
              "count": 0,
              "unamount": 180000.0,
              "uncount": 0,
              "dataDate": "2019-01-28"
            }
          },
          "retStatus": "S"
        };

      this.loadEchartTimeout(res);
    }

    loadEchartTimeout(res: any) {
        this.loading = true;
        // 理财产品杠杆比率
        this.circlechartOption3[1] = {
            series: [{
                data: [
                    {
                        value: res.result['13']['unamount'] + res.result['13']['amount'],
                    },
                    {
                        value: res.result['13']['unamount'],
                    }
                ]
            }]
        };
        this.circlechartData3 = ((res.result['13']['unamount'] / (res.result['13']['unamount'] + res.result['13']['amount'])) * 100).toFixed(2);
        this.loading = false;

    }

    ngOnInit() {
        this.query();

    }

}
