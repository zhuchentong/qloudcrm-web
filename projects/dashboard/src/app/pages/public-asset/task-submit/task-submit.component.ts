import {Component, Input, OnInit, SimpleChanges, OnChanges} from '@angular/core';
import {QlNotificationService} from "qloud-angular/package/notification/notification.service";

@Component({
    selector: 'app-task-submit',
    templateUrl: './task-submit.component.html',
    styleUrls: ['./task-submit.component.css']
})
export class TaskSubmitComponent implements OnInit {
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
          text: '待办事项分类统计',
          left: 'center',
          top: '42%',
          padding: [24, 0],
          textStyle: {
            fontSize: 16,
            align: 'center'
          }
        },
        toolbox: {
          show: false,
          top: 10,
          right: 20,
          feature: {
            myTool1: {
              show: false,
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
          color: ['#f95372', '#f4c63d', '#40daf1', '#00abff', '#8bd22f'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999'
              }
            }
          },
          // legend: {
          //   data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
          // },
          grid: {
            top: '80',
            left: '3%',
            right: '4%',
            bottom: '4%',
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
                  this.twoHandle(2);

                }
              },
            }
          },
          xAxis: {
            type: 'category',
            axisPointer: {
              type: 'shadow'
            },
            data: [],
          },
          yAxis: [{
            type: 'value',
            name: '任务数',
            min: 0,
            max: 25,
            axisLabel: {
              formatter: '{value} 个'
            }
          }],
          series: []
        }];
    loading = false;

  labelres = [
      {
        "dataDate": "2019-07-02",
        "investType": "01",
        "amount": 20,
        "yang": 4,
        "wang": 6,
        "li": 8,
        "zhang": 2
      },
      {
        "dataDate": "2019-09-02",
        "investType": "01",
        "amount": 10,
        "yang": 5,
        "wang": 4,
        "li": 1,
        "zhang": 0
      },
      {
        "dataDate": "2019-11-02",
        "investType": "01",
        "amount": 15,
        "yang": 5,
        "wang": 3,
        "li": 8,
        "zhang": 4
      },
      {
        "dataDate": "2020-01-02",
        "investType": "02",
        "amount": 12,
        "yang": 4,
        "wang": 4,
        "li": 4,
        "zhang": 4
      },
      {
        "dataDate": "2020-06-02",
        "investType": "15",
        "amount": 11,
        "yang": 2,
        "wang": 4,
        "li": 5,
        "zhang": 0
      }
    ];

    res = [
      {
        "targetName": "提醒",
        "amount": '38%',  // 完成率
        "count": 4,   // 参与客户数
        "aum": '￥15,000.00',  // AUM
        "familyAUM": '2019-10-01', // 开始时间
        "dayChangeAmount": '2019-10-07',  // 结束时间
        "yearChangeAmount": '￥800,000.00'
      },
      {
        "targetName": "警示",
        "amount": '40%',
        "count": 4,
        "aum": '￥150,000.00',
        "familyAUM": '2019-12-20',
        "dayChangeAmount": '2020-01-20',
        "yearChangeAmount": '￥4,800,000.00'    // 年累计资产变动
      },
      {
        "targetName": "通知",
        "amount": '50%',  // 资产余额
        "count": 4,   // 数量
        "aum": '￥55,000.00',  // AUM
        "familyAUM": '2019-01-01', // 户AUM
        "dayChangeAmount": '2019-12-31',  //上日资产变动
        "yearChangeAmount": '￥1,800,000.00'    // 年累计资产变动
      },
      {
        "targetName": "待办",
        "amount": '80%',  // 资产余额
        "count": 1,   // 数量
        "aum": '￥35,000.00',  // AUM
        "familyAUM": '2019-09-01', // 户AUM
        "dayChangeAmount": '2019-12-31',  //上日资产变动
        "yearChangeAmount": '￥3,200,000'    // 年累计资产变动
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
    const linechartData = [];
    const linechartXdata: Array<any> = [];

      const item = {
        name: '任务总数',
        smooth: true,
        type: 'line',
        data: []
      };
      linechartData.push(item);

      const item1 = {
        name: '提醒',
        smooth: true,
        type: 'bar',
        data: []
      };
      linechartData.push(item1);

    const item2 = {
      name: '警示',
      smooth: true,
      type: 'bar',
      data: []
    };
    linechartData.push(item2);

    const item3 = {
      name: '通知',
      smooth: true,
      type: 'bar',
      data: []
    };
    linechartData.push(item3);

    const item4 = {
      name: '待办',
      smooth: true,
      type: 'bar',
      data: []
    };
    linechartData.push(item4);

    for (let k = 0; k < res.length; k++) {
      linechartXdata.push(res[k]['dataDate']);
    }
    const set = new Set(linechartXdata);
    const dateList = Array.from(set);
    for (let n = 0; n < res.length; n++) {
      linechartData[0].data.push(res[n].amount);
      linechartData[1].data.push(res[n].yang);
      linechartData[2].data.push(res[n].wang);
      linechartData[3].data.push(res[n].li);
      linechartData[4].data.push(res[n].zhang);
    }
    this.labelOption[1] = {
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
