import { Component, OnInit } from '@angular/core';
import {QlNotificationService} from "qloud-angular/package/notification/notification.service";

@Component({
  selector: 'app-risk-money',
  templateUrl: './risk-money.component.html',
  styleUrls: ['./risk-money.component.css']
})
export class RiskMoneyComponent implements OnInit {


    circlechartOption1: Array<any> = [{
        title: {
            x: '27%',
            y: '37%',
            textStyle: {
                fontWeight: 400,
                fontSize: 14,
                color: '#FFFFFF'
            },
            // text: '90%'
            text: ''
        },
        grid: {
            top: 5,
            bottom: 5,
        },
        color: ['#f5f5f5', '#e74c3c'],
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
                    // value: 90,
                    value: '',
                    name: '',
                    label: {
                        normal: {
                            show: true
                        }
                    }
                },
                {
                    // value: 10,
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
    circlechartData1: any;
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
            "02": {
              "factorCode": "02",
              "amount": 190,
              "count": 10,
              "unamount": 70,
              "uncount": 10,
              "dataDate": "2019-01-02"
            }
          },
          "retStatus": "S"
        };
        this.loadEchartTimeout(res);
    }

    loadEchartTimeout(res: any) {
        this.loading = true;
        // 产品风险准备金
        this.circlechartOption1[1] = {
            title: {
                text: ((res.result['02']['unamount'] / res.result['02']['amount']) * 100).toFixed(1) + '%'
            },
            series: [{
                data: [
                    {
                        value: res.result['02']['unamount'],
                    },
                    {
                        value: res.result['02']['amount'],
                    }
                ]
            }]
        };
        this.circlechartData1 = res.result['02']['amount'] - res.result['02']['unamount'];
        this.loading = false;

    }

    ngOnInit() {
        this.query();

    }

}
