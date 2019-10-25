import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-performance-statistic',
  templateUrl: './performance-statistic.component.html',
  styleUrls: ['./performance-statistic.component.scss']
})
export class PerformanceStatisticComponent implements OnInit {
  options = [{
    title: {
      text: '业绩变化折线图'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      x: 'center',
      data:['2018业绩','2019业绩']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    // toolbox: {
    //   feature: {
    //     saveAsImage: {}
    //   }
    // },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: []
    },
    yAxis: {
      type: 'value'
    },
    series: [


      {
        name:'2018业绩',
        type:'line',
        stack: '总量',
        data:[]
      },
      {
        name:'2019业绩',
        type:'line',
        stack: '总量',
        data:[]
      }
    ]
  },
    {
      xAxis: {
        data: ['01-1', '01-15', '01-30', '02-1', '02-15', '02-27','03-1', '03-15', '03-30','04-1', '04-15', '04-30','05-1', '05-15', '05-30',]
      },
      series: [
        {
          data: [1000, 1100, 900, 1200,1000, 1100, 900, 1200,1000, 1100, 900, 1200, 1100, 900, 1200],
        },
        {
          data: [700, 1400, 700, 1600,1000, 1100, 900, 1100,1000, 1100, 900, 1000, 1100, 900, 1200],
        }
      ]
    }];
  options2 =[{
    title: {
      text: '业绩变化柱形图'
    },
    color: ['#3685ea', '#006699', '#448bea', '#e5323e'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      x: 'center',
      data:['2018业绩','2019业绩']
    },
    // legend: {
    //   data:['2018业绩','2019业绩'],
    //   width:30,
    //   height:40
    // },
    grid: {
      // top: '60',
      left: '3%',
      right: '4%',
      bottom: '4%',
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
        name: '2018业绩',
        type: 'bar',
        barWidth:25,
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
        name: '2019业绩',
        type: 'bar',
        barWidth:25,
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
  },{
    xAxis: [
      {
        data: ['01-1', '01-15', '01-30', '02-1', '02-15', '02-27','03-1', '03-15', '03-30','04-1', '04-15', '04-30','05-1', '05-15', '05-30',]
      }
    ], series: [
      {
        data: [10000, 11000, 9000, 12000,10000, 11000, 9000, 12000,10000, 11000, 9000, 12000, 11000, 9000, 12000],
      },
      {
        data: [10000, 11000, 9000, 12000,10000, 11000, 9000, 12000,10000, 11000, 9000, 12000, 11000, 9000, 12000],
      },
    ]
  }];
  constructor() { }

  ngOnInit() {
  }

}
