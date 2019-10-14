import {Component, Input, OnInit, SimpleChanges, OnChanges} from '@angular/core';
import {QlNotificationService} from "qloud-angular/package/notification/notification.service";

@Component({
    selector: 'app-reserve-money',
    templateUrl: './reserve-money.component.html',
    styleUrls: ['./reserve-money.component.css']
})
export class ReserveMoneyComponent implements OnInit {
    @Input()  hdata6: any; // 接收父组件charts的高度值

    index ='1';
    tabIndex = '1';
    oneIndex = 1;
    twoIndex = 1;

      barchartOption: Array<any> = [{
        backgroundColor: '#fff',
        tooltip: {
          trigger: 'item',
          // formatter: "{b} : {d}% <br/> {c}"
          formatter: '{b} : {c}'
        },
        title: {
          text: '客户分布',
          left: 'center',
          top: '42%',
          padding: [24, 0],
          textStyle: {
            fontSize: 16,
            align: 'center'
          }
        },
        toolbox: {
          show: true,
          top: 10,
          right: 20,
          feature: {
            myTool1: {
              show: true,
              title: '数据列表',
              icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
              onclick:() => {
                this.oneHandle(2);

              }
            },
          }
        },
        series: [{
          type: 'pie',
          radius: ['40%', '60%'],
          center: ['50%', '50%'],
          itemStyle: {
            normal: {
              shadowBlur: 30,
              shadowColor: 'rgba(0, 0, 0, 0.25)',
              shadowOffsetX: -5,
              shadowOffsetY: 5
            }
          },
          color: ['#186ba0', 'rgb(60, 78, 185)', 'rgb(27, 112, 239)', 'rgb(0, 171, 255)', 'rgb(64, 218, 241)', '#4AEAB0'],
          data: [],
          labelLine: {
            normal: {
              show: true,
              length: 18,
              lineStyle: {
                color: '#c0c0c0',
                width: 1
              }
            }
          },
          label: {
            normal: {
              formatter: '{c|{b}}\n{d|{d}%}',
              rich: {
                b: {
                  fontSize: 12,
                  color: '#12EABE',
                  align: 'left',
                  padding: 4
                },
                d: {
                  fontSize: 12,
                  align: 'left',
                  padding: 2
                },
                c: {
                  color: '#333',
                  fontSize: 12,
                  align: 'left',
                  padding: 2
                }
              }
            }
          }
        }]
      }];

      labelOption: Array<any> = [{
        backgroundColor: '#fff',
        tooltip: {
          trigger: 'item',
          // formatter: "{b} : {d}% <br/> {c}"
          formatter: '{b} : {c}'
        },
        title: {
          text: '客户标签使用程度',
          left: 'center',
          top: '42%',
          padding: [24, 0],
          textStyle: {
            fontSize: 16,
            align: 'center'
          }
        },
        toolbox: {
          show: true,
          top: 10,
          right: 20,
          feature: {
            myTool1: {
              show: true,
              title: '数据列表',
              icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
              onclick:() => {
                this.twoHandle(2);

              }
            },
          }
        },
        series: [{
          type: 'pie',
          radius: ['40%', '60%'],
          center: ['50%', '50%'],
          itemStyle: {
            normal: {
              shadowBlur: 30,
              shadowColor: 'rgba(0, 0, 0, 0.25)',
              shadowOffsetX: -5,
              shadowOffsetY: 5
            }
          },
          color: ['#893448', '#d95850', '#eb8146', '#ffb248', '#f2d643', '#ebdba4'],
          data: [],
          labelLine: {
            normal: {
              show: true,
              length: 18,
              lineStyle: {
                color: '#c0c0c0',
                width: 1
              }
            }
          },
          label: {
            normal: {
              formatter: '{c|{b}}\n{d|{d}%}',
              rich: {
                b: {
                  fontSize: 12,
                  color: '#12EABE',
                  align: 'left',
                  padding: 4
                },
                d: {
                  fontSize: 12,
                  align: 'left',
                  padding: 2
                },
                c: {
                  color: '#333',
                  fontSize: 12,
                  align: 'left',
                  padding: 2
                }
              }
            }
          }
        }]
      }];
    loading = false;

  labelres = [
      {
        "targetName": "高忠诚高贡献",
        "amount": '￥50,000.00',  // 资产余额
        "count": 80,   // 数量
        "aum": '￥15,000.00',  // AUM
        "familyAUM": '￥66,000.00', // 户AUM
        "dayChangeAmount": '￥100,000.00',  //上日资产变动
        "yearChangeAmount": '￥800,000.00'    // 年累计资产变动
      },
      {
        "targetName": "高忠诚低贡献",
        "amount": '￥90,000.00',  // 资产余额
        "count": 30,   // 数量
        "aum": '￥150,000.00',  // AUM
        "familyAUM": '￥660,000.00', // 户AUM
        "dayChangeAmount": '￥760,000.00',  //上日资产变动
        "yearChangeAmount": '￥4,800,000.00'    // 年累计资产变动
      },
      {
        "targetName": "低忠诚高贡献",
        "amount": '￥700,000.00',  // 资产余额
        "count": 50,   // 数量
        "aum": '￥55,000.00',  // AUM
        "familyAUM": '￥660,000.00', // 户AUM
        "dayChangeAmount": '￥200,000.00',  //上日资产变动
        "yearChangeAmount": '￥1,800,000.00'    // 年累计资产变动
      },
      {
        "targetName": "低忠诚低贡献",
        "amount": '￥400,000.0',  // 资产余额
        "count": 103,   // 数量
        "aum": '￥35,000.00',  // AUM
        "familyAUM": '￥96,000.00', // 户AUM
        "dayChangeAmount": '￥250,000.00',  //上日资产变动
        "yearChangeAmount": '￥3,200,000'    // 年累计资产变动
      },
      {
        "targetName": "金卡潜在客户",
        "amount": '￥20,000.00',  // 资产余额
        "count": 100,   // 数量
        "aum": '￥10,000.00',  // AUM
        "familyAUM": '￥36,000.00', // 户AUM
        "dayChangeAmount": '￥9,000.00',  //上日资产变动
        "yearChangeAmount": '￥340,000.00'    // 年累计资产变动
      },
      {
        "targetName": "流失风险高",
        "amount": '￥20,000.00',  // 资产余额
        "count": 70,   // 数量
        "aum": '￥10,000.00',  // AUM
        "familyAUM": '￥36,000.00', // 户AUM
        "dayChangeAmount": '￥9,000.00',  //上日资产变动
        "yearChangeAmount": '￥340,000.00'    // 年累计资产变动
      },
      {
        "targetName": "流失风险低",
        "amount": '￥20,000.00',  // 资产余额
        "count": 40,   // 数量
        "aum": '￥10,000.00',  // AUM
        "familyAUM": '￥36,000.00', // 户AUM
        "dayChangeAmount": '￥9,000.00',  //上日资产变动
        "yearChangeAmount": '￥340,000.00'    // 年累计资产变动
      }
    ];

    res = [
      {
        "targetName": "财富管理",
        "amount": '￥50,000.00',  // 资产余额
        "count": 20,   // 数量
        "aum": '￥15,000.00',  // AUM
        "familyAUM": '￥66,000.00', // 户AUM
        "dayChangeAmount": '￥100,000.00',  //上日资产变动
        "yearChangeAmount": '￥800,000.00'    // 年累计资产变动
      },
      {
        "targetName": "私行客户",
        "amount": '￥90,000.00',  // 资产余额
        "count": 10,   // 数量
        "aum": '￥150,000.00',  // AUM
        "familyAUM": '￥660,000.00', // 户AUM
        "dayChangeAmount": '￥760,000.00',  //上日资产变动
        "yearChangeAmount": '￥4,800,000.00'    // 年累计资产变动
      },
      {
        "targetName": "白金卡客户",
        "amount": '￥700,000.00',  // 资产余额
        "count": 80,   // 数量
        "aum": '￥55,000.00',  // AUM
        "familyAUM": '￥660,000.00', // 户AUM
        "dayChangeAmount": '￥200,000.00',  //上日资产变动
        "yearChangeAmount": '￥1,800,000.00'    // 年累计资产变动
      },
      {
        "targetName": "金卡客户",
        "amount": '￥400,000.0',  // 资产余额
        "count": 43,   // 数量
        "aum": '￥35,000.00',  // AUM
        "familyAUM": '￥96,000.00', // 户AUM
        "dayChangeAmount": '￥250,000.00',  //上日资产变动
        "yearChangeAmount": '￥3,200,000'    // 年累计资产变动
      },
      {
        "targetName": "普通客户",
        "amount": '￥20,000.00',  // 资产余额
        "count": 200,   // 数量
        "aum": '￥10,000.00',  // AUM
        "familyAUM": '￥36,000.00', // 户AUM
        "dayChangeAmount": '￥9,000.00',  //上日资产变动
        "yearChangeAmount": '￥340,000.00'    // 年累计资产变动
      }
    ];

    constructor(private notify: QlNotificationService) {
    }

    /*查询*/
    query() {
      this.loadEchartTimeout(this.res);
      this.loadEchart(this.labelres);
    }

  loadEchartTimeout(res: any) {
    this.loading = true;
    const piechartData: any = [];
    // 资金流向行业
    // 如果行业数量大于5
    if (res.length > 5) {
      for (let i = 0; i < 5; i++) {
        piechartData.push({
          value: res[i]['count'],
          name: res[i]['targetName']
        });
      }
    } else {
      for (let v = 0; v < res.length; v++) {
        piechartData.push({
          value: res[v]['count'],
          name: res[v]['targetName']
        });
      }
    }
    this.barchartOption[1] = {
      series: [{
        data: piechartData,
      }]
    };
    this.loading = false;
  }

  loadEchart(res: any) {
    this.loading = true;
    const piechartData: any = [];
    for (let i = 0; i < res.length; i++) {
      piechartData.push({
        value: res[i]['count'],
        name: res[i]['targetName']
      });
    }
    this.labelOption[1] = {
      series: [{
        data: piechartData,
      }]
    };
    this.loading = false;
  }

    ngOnInit() {
        this.query();
    }

  handle(index: string): void {
    this.tabIndex = index;
    // this.oneIndex = 1;
  }

  oneHandle(index: number): void {
      this.oneIndex = index;
  }
  twoHandle(index: number): void {
    this.twoIndex = index;
  }
}
