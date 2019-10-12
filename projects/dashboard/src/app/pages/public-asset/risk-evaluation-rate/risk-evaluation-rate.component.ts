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
            "12": {
              "factorCode": "12",
              "amount": 0.0,
              "count": 7000,
              "unamount": 0.0,
              "uncount": 14310,
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
          title: {
            text: ((res.result['12']['count'] / res.result['12']['uncount']) * 100).toFixed(1) + '%'
          },
            series: [{
                data: [
                    {
                        value: res.result['12']['count'],
                    },
                    {
                        value: res.result['12']['uncount'],
                    }
                ]
            }]
        };
        this.circlechartData2 = res.result['12']['count'];
        this.loading = false;
    }

    ngOnInit() {
        this.query();

    }

}
