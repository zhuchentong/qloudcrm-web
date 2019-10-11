import { Component, OnInit } from '@angular/core';
import {QlNotificationService} from "qloud-angular/package/notification/notification.service";
@Component({
  selector: 'app-asset-proportion',
  templateUrl: './asset-proportion.component.html',
  styleUrls: ['./asset-proportion.component.css']
})
export class AssetProportionComponent implements OnInit {

    circlechartOption: Array<any> = [
        {
        // title: {
        //   x: '29%',
        //   y: '37%',
        //   textStyle: {
        //     fontWeight: 400,
        //     fontSize: 14,
        //     color: '#FFFFFF'
        //   },
        //   text: '65%'
        // },
        grid: {
            top: 5,
            bottom: 5,
        },
        color: ['#f5f5f5', '#3498db'],
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
                    // value: 65,
                    value: '',
                    name: '',
                    label: {
                        normal: {
                            show: true
                        }
                    }
                },
                {
                    // value: 35,
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
    circlechartData: any;
    constructor( private notify: QlNotificationService) {
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
        const piechartData: any = [];
        const otherAmount = 0;
        const reservesData1: any = [];
        const reservesData2: any = [];
        const reservesTime: any = [];
        const linechartData = [];
        const linechartXdata: Array<any> = [];
        const areachartData = [];
        // 非标资管占比
        this.circlechartOption[1] = {
            series: [{
                data: [
                    {
                        value: res.result['11']['uncount'],
                    },
                    {
                        value: res.result['11']['uncount'] + res.result['11']['count'],
                    }
                ]
            }]
        };
        this.circlechartData = res.result['11']['uncount'] / (res.result['11']['uncount'] + res.result['11']['count']) * 100;
        this.loading = false;
    }

    ngOnInit() {
        this.query();

    }

}
