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
    threeIndex = 1;

      barchartOption: Array<any> = [{
        backgroundColor: '#fff',
        tooltip: {
          trigger: 'item',
          // formatter: "{b} : {d}% <br/> {c}"
          formatter: '{b}：{c}人'
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
              formatter: '{c|{b}：{c}人}\n{d|{d}%}',
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
        "targetName": "私行(600万以上)",
        "amount": '￥9,000,000.00',  // 资产余额
        "count": 10,   // 数量
        "aum": '￥8,050,000.00',  // AUM
        "familyAUM": '￥10,660,000.00', // 户AUM
        "dayChangeAmount": '￥760,000.00',  //上日资产变动
        "yearChangeAmount": '￥40,800,000.00'    // 年累计资产变动
      },
      {
        "targetName": "钻石(300万-600万)",
        "amount": '￥5,000,000.00',  // 资产余额
        "count": 20,   // 数量
        "aum": '￥4,005,000.00',  // AUM
        "familyAUM": '￥5,006,000.00', // 户AUM
        "dayChangeAmount": '￥1,500,000.00',  //上日资产变动
        "yearChangeAmount": '￥8,000,000.00'    // 年累计资产变动
      },
      {
        "targetName": "白金(100万-300万)",
        "amount": '￥1,700,000.00',  // 资产余额
        "count": 80,   // 数量
        "aum": '￥2,055,000.00',  // AUM
        "familyAUM": '￥3,660,000.00', // 户AUM
        "dayChangeAmount": '￥800,000.00',  //上日资产变动
        "yearChangeAmount": '￥1,800,000.00'    // 年累计资产变动
      },
      {
        "targetName": "黄金(50万-100万)",
        "amount": '￥750,000.0',  // 资产余额
        "count": 102,   // 数量
        "aum": '￥1,000,000.00',  // AUM
        "familyAUM": '￥1,096,000.00', // 户AUM
        "dayChangeAmount": '￥500,000.00',  //上日资产变动
        "yearChangeAmount": '￥2,000,000.00'    // 年累计资产变动
      },
      {
        "targetName": "白银(20万-50万)",
        "amount": '￥350,000.0',  // 资产余额
        "count": 46,   // 数量
        "aum": '￥400,000.00',  // AUM
        "familyAUM": '￥696,000.00', // 户AUM
        "dayChangeAmount": '￥250,000.00',  //上日资产变动
        "yearChangeAmount": '￥2,000,000.00'    // 年累计资产变动
      },
      {
        "targetName": "优质(5万-20万)",
        "amount": '￥150,000.0',  // 资产余额
        "count": 300,   // 数量
        "aum": '￥100,000.00',  // AUM
        "familyAUM": '￥196,000.00', // 户AUM
        "dayChangeAmount": '￥50,000.00',  //上日资产变动
        "yearChangeAmount": '￥200,000.00'    // 年累计资产变动
      },
      {
        "targetName": "价值(1万-5万)",
        "amount": '￥18,000.00',  // 资产余额
        "count": 60,   // 数量
        "aum": '￥12,000.00',  // AUM
        "familyAUM": '￥36,000.00', // 户AUM
        "dayChangeAmount": '￥4,000.00',  //上日资产变动
        "yearChangeAmount": '￥40,000.00'    // 年累计资产变动
      },
      {
        "targetName": "大众(0-1万)",
        "amount": '￥8,000.00',  // 资产余额
        "count": 200,   // 数量
        "aum": '￥10,000.00',  // AUM
        "familyAUM": '￥36,000.00', // 户AUM
        "dayChangeAmount": '￥4,000.00',  //上日资产变动
        "yearChangeAmount": '￥40,000.00'    // 年累计资产变动
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
      top: '50',
      left: '3%',
      right: '5%',
      bottom: '10%',
      containLabel: true
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
            this.threeHandle(2);

          }
        },
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

  //投资类型统计数据
 linedata = [
    {
      "dataDate": "2018-07-02",
      "a1": 100,   //消费圈前5
      "a2": 10,   //连续6个月无投资行为
      "a3": 78,   //定期-最近7天浏览次数
      "a4": 45,   //精英贷-最近7天浏览次数
      "a5": 23,   //理财-最近7天浏览次数
      "a6": 83,   //基金-最近7天浏览次数
      "a7": 23   //信用卡-最近7天浏览次数
    },
    {
      "dataDate": "2018-07-02",
      "a1": 129,   //消费圈前5
      "a2": 23,   //连续6个月无投资行为
      "a3": 52,   //定期-最近7天浏览次数
      "a4": 34,   //精英贷-最近7天浏览次数
      "a5": 75,   //理财-最近7天浏览次数
      "a6": 43,   //基金-最近7天浏览次数
      "a7": 23   //信用卡-最近7天浏览次数
    },
    {
      "dataDate": "2018-09-02",
      "a1": 98,   //消费圈前5
      "a2": 23,   //连续6个月无投资行为
      "a3": 45,   //定期-最近7天浏览次数
      "a4": 35,   //精英贷-最近7天浏览次数
      "a5": 83,   //理财-最近7天浏览次数
      "a6": 63,   //基金-最近7天浏览次数
      "a7": 53   //信用卡-最近7天浏览次数
    },
    {
      "dataDate": "2018-11-02",
      "a1": 87,   //消费圈前5
      "a2": 23,   //连续6个月无投资行为
      "a3": 53,   //定期-最近7天浏览次数
      "a4": 23,   //精英贷-最近7天浏览次数
      "a5": 63,   //理财-最近7天浏览次数
      "a6": 28,   //基金-最近7天浏览次数
      "a7": 35   //信用卡-最近7天浏览次数
    },
    {
      "dataDate": "2019-01-02",
      "a1": 120,   //消费圈前5
      "a2": 87,   //连续6个月无投资行为
      "a3": 23,   //定期-最近7天浏览次数
      "a4": 53,   //精英贷-最近7天浏览次数
      "a5": 54,   //理财-最近7天浏览次数
      "a6": 34,   //基金-最近7天浏览次数
      "a7": 45   //信用卡-最近7天浏览次数
    },
    ];

    constructor(private notify: QlNotificationService) {
    }

    /*查询*/
    query() {
      this.loadEchartTimeout(this.res);
      this.loadEchart(this.labelres);
      this.loadlineEchart(this.linedata);
    }

  loadlineEchart(res: any) {
    this.loading = true;
    const linechartData = [];
    const linechartXdata: Array<any> = [];

    const item = {
      name: '消费圈前5',
      smooth: true,
      type: 'line',
      data: []
    };
    linechartData.push(item);

    const item1 = {
      name: '连续6个月无投资行为',
      smooth: true,
      type: 'line',
      data: []
    };
    linechartData.push(item1);

    const item2 = {
      name: '定期-最近7天浏览次数',
      smooth: true,
      type: 'line',
      data: []
    };
    linechartData.push(item2);

    const item3 = {
      name: '精英贷-最近7天浏览次数',
      smooth: true,
      type: 'line',
      data: []
    };
    linechartData.push(item3);

    const item4 = {
      name: '理财-最近7天浏览次数',
      smooth: true,
      type: 'line',
      data: []
    };
    linechartData.push(item4);

    const item5 = {
      name: '基金-最近7天浏览次数',
      smooth: true,
      type: 'line',
      data: []
    };
    linechartData.push(item5);

    const item6 = {
      name: '信用卡-最近7天浏览次数',
      smooth: true,
      type: 'line',
      data: []
    };
    linechartData.push(item6);

    for (let k = 0; k < res.length; k++) {
      linechartXdata.push(res[k]['dataDate']);
    }
    const set = new Set(linechartXdata);
    const dateList = Array.from(set);
    for (let n = 0; n < res.length; n++) {
      linechartData[0].data.push(res[n].a1);
      linechartData[1].data.push(res[n].a2);
      linechartData[2].data.push(res[n].a3);
      linechartData[3].data.push(res[n].a4);
      linechartData[4].data.push(res[n].a5);
      linechartData[5].data.push(res[n].a6);
      linechartData[6].data.push(res[n].a7);
    }
    this.linechartOption[1] = {
      xAxis: {
        data: dateList,
      },
      series: linechartData
    };
    this.loading = false;

  }

  loadEchartTimeout(res: any) {
    this.loading = true;
    const piechartData: any = [];
    for (let i = 0; i < res.length; i++) {
      piechartData.push({
        value: res[i]['count'],
        name: res[i]['targetName']
      });
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

  threeHandle(index: number): void {
    this.threeIndex = index;
  }
}
