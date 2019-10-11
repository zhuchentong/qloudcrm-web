import {Component, Input, OnInit, SimpleChanges, OnChanges} from '@angular/core';
import {QlNotificationService} from "qloud-angular/package/notification/notification.service";

@Component({
    selector: 'app-reserve-money',
    templateUrl: './reserve-money.component.html',
    styleUrls: ['./reserve-money.component.css']
})
export class ReserveMoneyComponent implements OnInit {
    @Input()  hdata6: any; // 接收父组件charts的高度值
    barchartOption: Array<any> = [{
        color: ['#003366', '#006699', '#4cabce', '#e5323e'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        // legend: {
        //   data:['净资产','净资本','总资产']
        // },
        grid: {
            top: '20',
            left: '3%',
            right: '4%',
            bottom: '8%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                // data: ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4']
                data: []
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '产品管理费用',
                type: 'bar',
                // data: [10000, 11000, 9000, 12000],
                data: [],
                itemStyle: {
                    normal: {
                        shadowBlur: 30,
                        shadowColor: 'rgba(0, 0, 0, 0.25)',
                        shadowOffsetX: -5,
                        shadowOffsetY: 5
                    }
                }
            },
            {
                name: '准备金',
                type: 'bar',
                // data: [8000, 7000, 9000, 10000],
                data: [],
                itemStyle: {
                    normal: {
                        shadowBlur: 30,
                        shadowColor: 'rgba(0, 0, 0, 0.25)',
                        shadowOffsetX: -5,
                        shadowOffsetY: 5
                    }
                }
            },
        ]
    }];
    loading = false;

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
          "retStatus": "S",
          "list": [
            {
              "dateMonth": "2018-01",
              "cost": 2691000.0,
              "actualCost": 2119741.32
            },
            {
              "dateMonth": "2018-03",
              "cost": 5382000.0,
              "actualCost": 2003499.77
            },
            {
              "dateMonth": "2018-05",
              "cost": 8073000.0,
              "actualCost": 2009041.54
            },
            {
              "dateMonth": "2018-07",
              "cost": 3229200.0,
              "actualCost": 1664807.19
            },
            {
              "dateMonth": "2018-09",
              "cost": 4305600.0,
              "actualCost": 880025.08
            },
            {
              "dateMonth": "2018-11",
              "cost": 4843800.0,
              "actualCost": 332206.29
            },
            {
              "dateMonth": "2019-01",
              "cost": 3767400.0,
              "actualCost": 2174501.08
            }
          ]
        };
      this.loadEchartTimeout(res);
    }

    loadEchartTimeout(res: any) {
        this.loading = true;
        const reservesData1: any = [];
        const reservesData2: any = [];
        const reservesTime: any = [];
        // 资本计提
        for (let j = 0; j < res.list.length; j++) {
            reservesData1.push(res.list[j]['cost']);
            reservesData2.push(res.list[j]['actualCost']);
            reservesTime.push(res.list[j]['dateMonth']);
        }
        this.barchartOption[1] = {
            xAxis: [
                {
                    data: reservesTime
                }
            ],
            series: [
                {
                    data: reservesData1,
                },
                {
                    data: reservesData2,
                },
            ]
        };
        this.loading = false;
    }

    ngOnInit() {
        this.query();
    }
}
