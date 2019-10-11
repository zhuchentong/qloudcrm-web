import { Component, OnInit } from '@angular/core';
import {QlNotificationService} from "qloud-angular/package/notification/notification.service";

@Component({
  selector: 'app-risk-evaluation-rate',
  templateUrl: './risk-evaluation-rate.component.html',
  styleUrls: ['./risk-evaluation-rate.component.css']
})
export class RiskEvaluationRateComponent implements OnInit {
    loading = false;
    circlechartData2: any;
    circlechartOption2: Array<any> = [{
        grid: {
            top: 5,
            bottom: 5,
        },
        color: ['#f5f5f5', '#f39c12'],
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
                    // value: 81,
                    value: '',
                    name: '',
                    label: {
                        normal: {
                            show: true
                        }
                    }
                },
                {
                    // value: 19,
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
        // 客户风险评估率
        this.circlechartOption2[1] = {
            series: [{
                data: [
                    {
                        value: res.result['12']['count'],
                    },
                    {
                        value: res.result['12']['uncount'] + res.result['12']['count'],
                    }
                ]
            }]
        };
        this.circlechartData2 = ((res.result['12']['count'] / (res.result['12']['uncount'] + res.result['12']['count'])) * 100).toFixed(2);
        this.loading = false;
    }

    ngOnInit() {
        this.query();

    }

}
