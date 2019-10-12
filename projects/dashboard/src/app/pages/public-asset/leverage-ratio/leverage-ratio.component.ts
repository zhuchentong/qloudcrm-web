import { Component, OnInit } from '@angular/core';
import {QlNotificationService} from "qloud-angular/package/notification/notification.service";

@Component({
  selector: 'app-leverage-ratio',
  templateUrl: './leverage-ratio.component.html',
  styleUrls: ['./leverage-ratio.component.css']
})
export class LeverageRatioComponent implements OnInit {


    circlechartOption3: Array<any> = [{
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
            "13": {
              "factorCode": "13",
              "amount": 20,
              "count": 0,
              "unamount": 11,
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
          title: {
            text: ((res.result['13']['unamount'] / res.result['13']['amount']) * 100).toFixed(1) + '%'
          },
            series: [{
                data: [
                    {
                        value: res.result['13']['unamount'],
                    },
                    {
                        value: res.result['13']['amount'],
                    }
                ]
            }]
        };
        this.circlechartData3 = res.result['13']['unamount'];
        this.loading = false;

    }

    ngOnInit() {
        this.query();

    }

}
