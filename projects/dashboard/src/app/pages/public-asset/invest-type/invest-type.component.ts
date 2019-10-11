import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {QlNotificationService} from "qloud-angular/package/notification/notification.service";

@Component({
  selector: 'app-invest-type',
  templateUrl: './invest-type.component.html',
  styleUrls: ['./invest-type.component.css']
})
export class InvestTypeComponent implements OnInit {
    @Input()  hdata7: any; // 接收父组件charts的高度值
    @Input() type  = 'success';
    @Output() output = new EventEmitter();
    investType = [
      {
        "value": "01",
        "label": "混合类",
        "code": "investType"
      },
      {
        "value": "02",
        "label": "非标准化债权类",
        "code": "investType"
      },
      {
        "value": "03",
        "label": "债券类",
        "code": "investType"
      },
      {
        "value": "04",
        "label": "银行存款类",
        "code": "investType"
      },
      {
        "value": "05",
        "label": "结构性投资类",
        "code": "investType"
      },
      {
        "value": "06",
        "label": "股权类",
        "code": "investType"
      },
      {
        "value": "07",
        "label": "拆放同业及买入返售类",
        "code": "investType"
      },
      {
        "value": "08",
        "label": "同业存单类",
        "code": "investType"
      },
      {
        "value": "09",
        "label": "股票类",
        "code": "investType"
      },
      {
        "value": "10",
        "label": "另类投资类",
        "code": "investType"
      },
      {
        "value": "11",
        "label": "理财直接融资工具类",
        "code": "investType"
      },
      {
        "value": "12",
        "label": "代客境外投资类",
        "code": "investType"
      },
      {
        "value": "13",
        "label": "新增可投资资产类",
        "code": "investType"
      },
      {
        "value": "14",
        "label": "公募基金类",
        "code": "investType"
      },
      {
        "value": "15",
        "label": "货币市场工具类",
        "code": "investType"
      },
      {
        "value": "16",
        "label": "产业基金类",
        "code": "investType"
      }
    ];
    linechartOption: Array<any> = [{
        color: ['#f95372', '#f4c63d', '#40daf1', '#00abff', '#8bd22f'],
        // title: {
        //   text: '折线图堆叠'
        // },
        tooltip: {
            trigger: 'axis'
        },
        // legend: {
        //   data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
        // },
        grid: {
            top: '20',
            left: '3%',
            right: '4%',
            bottom: '8%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {show: false}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: [],
        },
        yAxis: {
            type: 'value'
        },
        series: []
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
          "retStatus": "S",
          "list": [
            {
              "dataDate": "2018-07-02",
              "investType": "01",
              "amount": 267132.0
            },
            {
              "dataDate": "2018-07-02",
              "investType": "02",
              "amount": 192247.0
            },
            {
              "dataDate": "2018-07-02",
              "investType": "03",
              "amount": 185809.0
            },
            {
              "dataDate": "2018-07-02",
              "investType": "04",
              "amount": 151497.0
            },
            {
              "dataDate": "2018-07-02",
              "investType": "05",
              "amount": 512664.0
            },
            {
              "dataDate": "2018-07-02",
              "investType": "06",
              "amount": 94780.0
            },
            {
              "dataDate": "2018-07-02",
              "investType": "07",
              "amount": 215958.0
            },
            {
              "dataDate": "2018-07-02",
              "investType": "08",
              "amount": 311982.0
            },
            {
              "dataDate": "2018-07-02",
              "investType": "09",
              "amount": 212985.0
            },
            {
              "dataDate": "2018-07-02",
              "investType": "10",
              "amount": 233629.0
            },
            {
              "dataDate": "2018-07-02",
              "investType": "11",
              "amount": 289107.0
            },
            {
              "dataDate": "2018-07-02",
              "investType": "12",
              "amount": 299871.0
            },
            {
              "dataDate": "2018-07-02",
              "investType": "13",
              "amount": 214700.0
            },
            {
              "dataDate": "2018-07-02",
              "investType": "14",
              "amount": 364553.0
            },
            {
              "dataDate": "2018-07-02",
              "investType": "15",
              "amount": 225868.0
            },
            {
              "dataDate": "2018-07-02",
              "investType": "16",
              "amount": 68560.0
            },
            {
              "dataDate": "2018-09-02",
              "investType": "01",
              "amount": 231691.0
            },
            {
              "dataDate": "2018-09-02",
              "investType": "02",
              "amount": 179605.0
            },
            {
              "dataDate": "2018-09-02",
              "investType": "03",
              "amount": 275948.0
            },
            {
              "dataDate": "2018-09-02",
              "investType": "04",
              "amount": 170025.0
            },
            {
              "dataDate": "2018-09-02",
              "investType": "05",
              "amount": 521888.0
            },
            {
              "dataDate": "2018-09-02",
              "investType": "06",
              "amount": 40303.0
            },
            {
              "dataDate": "2018-09-02",
              "investType": "08",
              "amount": 273223.0
            },
            {
              "dataDate": "2018-09-02",
              "investType": "09",
              "amount": 251347.0
            },
            {
              "dataDate": "2018-09-02",
              "investType": "10",
              "amount": 240040.0
            },
            {
              "dataDate": "2018-09-02",
              "investType": "11",
              "amount": 239967.0
            },
            {
              "dataDate": "2018-09-02",
              "investType": "12",
              "amount": 256905.0
            },
            {
              "dataDate": "2018-09-02",
              "investType": "13",
              "amount": 237401.0
            },
            {
              "dataDate": "2018-09-02",
              "investType": "14",
              "amount": 241945.0
            },
            {
              "dataDate": "2018-09-02",
              "investType": "15",
              "amount": 219380.0
            },
            {
              "dataDate": "2018-09-02",
              "investType": "16",
              "amount": 25315.0
            },
            {
              "dataDate": "2018-11-02",
              "investType": "01",
              "amount": 333760.0
            },
            {
              "dataDate": "2018-11-02",
              "investType": "02",
              "amount": 180416.0
            },
            {
              "dataDate": "2018-11-02",
              "investType": "03",
              "amount": 135995.0
            },
            {
              "dataDate": "2018-11-02",
              "investType": "04",
              "amount": 186758.0
            },
            {
              "dataDate": "2018-11-02",
              "investType": "05",
              "amount": 417533.0
            },
            {
              "dataDate": "2018-11-02",
              "investType": "06",
              "amount": 67479.0
            },
            {
              "dataDate": "2018-11-02",
              "investType": "07",
              "amount": 217622.0
            },
            {
              "dataDate": "2018-11-02",
              "investType": "08",
              "amount": 256521.0
            },
            {
              "dataDate": "2018-11-02",
              "investType": "09",
              "amount": 189532.0
            },
            {
              "dataDate": "2018-11-02",
              "investType": "10",
              "amount": 249089.0
            },
            {
              "dataDate": "2018-11-02",
              "investType": "11",
              "amount": 231813.0
            },
            {
              "dataDate": "2018-11-02",
              "investType": "12",
              "amount": 249846.0
            },
            {
              "dataDate": "2018-11-02",
              "investType": "13",
              "amount": 316328.0
            },
            {
              "dataDate": "2018-11-02",
              "investType": "14",
              "amount": 226945.0
            },
            {
              "dataDate": "2018-11-02",
              "investType": "15",
              "amount": 273096.0
            },
            {
              "dataDate": "2018-11-02",
              "investType": "16",
              "amount": 50625.0
            },
            {
              "dataDate": "2019-01-02",
              "investType": "01",
              "amount": 346195.0
            },
            {
              "dataDate": "2019-01-02",
              "investType": "02",
              "amount": 220565.0
            },
            {
              "dataDate": "2019-01-02",
              "investType": "03",
              "amount": 140055.0
            },
            {
              "dataDate": "2019-01-02",
              "investType": "04",
              "amount": 298005.0
            },
            {
              "dataDate": "2019-01-02",
              "investType": "05",
              "amount": 562549.0
            },
            {
              "dataDate": "2019-01-02",
              "investType": "06",
              "amount": 51612.0
            },
            {
              "dataDate": "2019-01-02",
              "investType": "07",
              "amount": 192886.0
            },
            {
              "dataDate": "2019-01-02",
              "investType": "08",
              "amount": 212413.0
            },
            {
              "dataDate": "2019-01-02",
              "investType": "09",
              "amount": 207333.0
            },
            {
              "dataDate": "2019-01-02",
              "investType": "10",
              "amount": 171004.0
            },
            {
              "dataDate": "2019-01-02",
              "investType": "11",
              "amount": 269148.0
            },
            {
              "dataDate": "2019-01-02",
              "investType": "12",
              "amount": 212351.0
            },
            {
              "dataDate": "2019-01-02",
              "investType": "13",
              "amount": 284205.0
            },
            {
              "dataDate": "2019-01-02",
              "investType": "14",
              "amount": 380303.0
            },
            {
              "dataDate": "2019-01-02",
              "investType": "15",
              "amount": 247981.0
            },
            {
              "dataDate": "2019-01-02",
              "investType": "16",
              "amount": 67606.0
            }
          ]
        };
      this.loadEchartTimeout(res);
    }

    loadEchartTimeout(res: any) {
        this.loading = true;
        const linechartData = [];
        const linechartXdata: Array<any> = [];
        // 投资资产收益变化
        // 设置投资资产类型收益变化echarts对应series
        for (let i = 0; i < this.investType.length; i++) {
            const item = {
                name: this.investType[i]['label'],
                smooth: true,
                type: 'line',
                data: []
            };
            linechartData.push(item);
        }
        for (let k = 0; k < res.list.length; k++) {
            linechartXdata.push(res.list[k]['dataDate']);
        }
        const set = new Set(linechartXdata);
        const dateList = Array.from(set);
        const dateSet = {};
        for (let e = 0; e < dateList.length; e++) {
            dateSet[dateList[e]] = {
                '01': '',
                '02': '',
                '03': '',
                '04': '',
                '05': '',
                '06': '',
                '07': '',
                '08': '',
                '09': '',
                '10': '',
                '11': '',
                '12': '',
                '13': '',
                '14': '',
                '15': '',
                '16': ''
            };
        }
        for (let e = 0; e < dateList.length; e++) {
            dateSet[dateList[e]] = {};
            dateSet[dateList[e]]['01'] = '';
        }
        for (let n = 0; n < res.list.length; n++) {
            const d = res.list[n]['dataDate'];
            const r = res.list[n]['investType'];
            const c = res.list[n]['amount'];
            dateSet[d][r] = c;
        }
        for (let n = 0; n < dateList.length; n++) {
            linechartData[0].data.push(dateSet[dateList[n]]['01']);
            linechartData[1].data.push(dateSet[dateList[n]]['02']);
            linechartData[2].data.push(dateSet[dateList[n]]['03']);
            linechartData[3].data.push(dateSet[dateList[n]]['04']);
            linechartData[4].data.push(dateSet[dateList[n]]['05']);
            linechartData[5].data.push(dateSet[dateList[n]]['06']);
            linechartData[6].data.push(dateSet[dateList[n]]['07']);
            linechartData[7].data.push(dateSet[dateList[n]]['08']);
            linechartData[8].data.push(dateSet[dateList[n]]['09']);
            linechartData[9].data.push(dateSet[dateList[n]]['10']);
            linechartData[10].data.push(dateSet[dateList[n]]['11']);
            linechartData[11].data.push(dateSet[dateList[n]]['12']);
            linechartData[12].data.push(dateSet[dateList[n]]['13']);
            linechartData[13].data.push(dateSet[dateList[n]]['14']);
            linechartData[14].data.push(dateSet[dateList[n]]['15']);
            linechartData[15].data.push(dateSet[dateList[n]]['16']);
        }
        this.linechartOption[1] = {
            xAxis: {
                data: dateList,
            },
            series: linechartData
        };
        this.loading = false;

    }

    ngOnInit() {
        this.query();

    }
}
