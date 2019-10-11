import {Component, Input, OnInit} from '@angular/core';
import {QlNotificationService} from "qloud-angular/package/notification/notification.service";

@Component({
  selector: 'app-profit-type',
  templateUrl: './profit-type.component.html',
  styleUrls: ['./profit-type.component.css']
})
export class ProfitTypeComponent implements OnInit {
    @Input()  hdata8 = '400px'; // 接收父组件charts的高度值
    areachartOption: Array<any> = [{
        color: ['#f95372', '#f4c63d', '#40daf1', '#00abff', '#8bd22f'],
        // title: {
        //   text: '堆叠区域图'
        // },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        // legend: {
        //   data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
        // },
        toolbox: {
            feature: {
                saveAsImage: {show: false}
            }
        },
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
                boundaryGap: false,
                // data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                data: []
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: []
    }];
    loading = false;
    profitType = [
      {
        "value": "01",
        "label": "保证收益",
        "code": "profitType"
      },
      {
        "value": "02",
        "label": "保本浮动收益",
        "code": "profitType"
      },
      {
        "value": "03",
        "label": "非保本浮动收益",
        "code": "profitType"
      }
    ];
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
              "dataDate": "2018-07-02",
              "profitType": "01",
              "worth": 3.8711
            },
            {
              "dataDate": "2018-07-02",
              "profitType": "02",
              "worth": 3.3406625
            },
            {
              "dataDate": "2018-07-02",
              "profitType": "03",
              "worth": 2.86203226
            },
            {
              "dataDate": "2018-09-02",
              "profitType": "01",
              "worth": 2.26135
            },
            {
              "dataDate": "2018-09-02",
              "profitType": "02",
              "worth": 2.78045
            },
            {
              "dataDate": "2018-09-02",
              "profitType": "03",
              "worth": 2.91006034
            },
            {
              "dataDate": "2018-11-02",
              "profitType": "01",
              "worth": 2.57975
            },
            {
              "dataDate": "2018-11-02",
              "profitType": "02",
              "worth": 3.655725
            },
            {
              "dataDate": "2018-11-02",
              "profitType": "03",
              "worth": 3.01113065
            },
            {
              "dataDate": "2019-01-02",
              "profitType": "01",
              "worth": 2.702375
            },
            {
              "dataDate": "2019-01-02",
              "profitType": "02",
              "worth": 2.7146625
            },
            {
              "dataDate": "2019-01-02",
              "profitType": "03",
              "worth": 3.03824677
            }
          ]
        };
      this.loadEchartTimeout(res);
    }

    loadEchartTimeout(res: any) {
        this.loading = true;
        const piechartData: any = [];
        const linechartXdata: Array<any> = [];
        const areachartData = [];
        // 收益类型净值变动
        // 设置收益类型净值变动echarts对应series
        for (let j = 0; j < this.profitType.length; j++) {
            const item2 = {
                name: this.profitType[j]['label'],
                smooth: true,
                type: 'line',
                areaStyle: {},
                data: []
            };
            areachartData.push(item2);
        }
        for (let x = 0; x < res.list.length; x++) {
            linechartXdata.push(res.list[x]['dataDate']);
        }
        const set2 = new Set(linechartXdata);
        const dateList2 = Array.from(set2);
        const dateSet2 = {};
        for (let e = 0; e < dateList2.length; e++) {
            dateSet2[dateList2[e]] = {'01': '', '02': '', '03': ''};
        }
        for (let n = 0; n < res.list.length; n++) {
            const d = res.list[n]['dataDate'];
            const r = res.list[n]['profitType'];
            const c = res.list[n]['worth'];
            dateSet2[d][r] = c;
        }
        for (let n = 0; n < dateList2.length; n++) {
            areachartData[0].data.push(dateSet2[dateList2[n]]['01']);
            areachartData[1].data.push(dateSet2[dateList2[n]]['02']);
            areachartData[2].data.push(dateSet2[dateList2[n]]['03']);

        }
        this.areachartOption[1] = {
            xAxis: [
                {
                    data: dateList2
                }
            ],
            series: areachartData
        };
        this.loading = false;
    }

    ngOnInit() {
        this.query();
    }
}
