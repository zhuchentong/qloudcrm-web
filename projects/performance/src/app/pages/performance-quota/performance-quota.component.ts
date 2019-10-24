import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-performance-quota',
  templateUrl: './performance-quota.component.html',
  styleUrls: ['./performance-quota.component.scss']
})
export class PerformanceQuotaComponent implements OnInit {
  loading = false;
  lineOption: Array < any > = [{
    color: ['#f4c63d', '#40daf1', '#00abff', '#8bd22f', '#893448', '#d95850', '#eb8146', '#ffb248', '#f2d643', '#f95372', '#ebdba4'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999'
        }
      }
    },
    legend: {
      data: []
    },
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
          onclick: () => {
            // this.twoHandle(2);
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
      name: '次数',
      min: 0,
      max: 150,
      axisLabel: {
        formatter: '{value} 次'
      }
    },
      {
        type: 'value',
        name: '金额',
        min: 0,
        max: 200,
        axisLabel: {
          formatter: '{value} 万元'
        }
      }],
    series: []
  }];
  lineres = [
    {
      "dataDate": "1月",
      "a1": 20,
      "a2": 4,
      "a3": 6,
      "a4": 8,
      "a5": 2,
      "a6": 2,
      "a7": 2,
      "a8": 2,
      "a9": 2,
      "b1": 10.5,
      "b2": 4.2,
      "b3": 9,
      "b4": 2,
      "b5": 10,
      "b6": 11,
      "b7": 9,
      "b8": 9.3,
      "b9": 8
    },
    {
      "dataDate": "2月",
      "a1": 40,
      "a2": 12,
      "a3": 10,
      "a4": 9,
      "a5": 10,
      "a6": 20,
      "a7": 4,
      "a8": 6,
      "a9": 8,
      "b1": 67.5,
      "b2": 10.2,
      "b3": 6,
      "b4": 3,
      "b5": 22,
      "b6": 21,
      "b7": 14,
      "b8": 19,
      "b9": 2
    },
    {
      "dataDate": "3月",
      "a6": 40,
      "a7": 12,
      "a8": 10,
      "a9": 9,
      "a1": 10,
      "a2": 5,
      "a3": 4,
      "a4": 1,
      "a5": 0,
      "b1": 23,
      "b2": 9.8,
      "b3": 12,
      "b4": 10,
      "b5": 0,
      "b6": 8,
      "b7": 10.1,
      "b8": 11,
      "b9": 5
    },
    {
      "dataDate": "4月",
      "a1": 15,
      "a2": 5,
      "a3": 3,
      "a4": 8,
      "a5": 4,
      "a6": 40,
      "a7": 12,
      "a8": 10,
      "a9": 9,
      "b1": 28,
      "b2": 5.8,
      "b3": 6.7,
      "b4": 5,
      "b5": 2,
      "b6": 8,
      "b7": 10.1,
      "b8": 11,
      "b9": 5
    },
    {
      "dataDate": "5月",
      "a1": 12,
      "a2": 4,
      "a3": 4,
      "a4": 4,
      "a5": 4,
      "a6": 15,
      "a7": 5,
      "a8": 3,
      "a9": 8,
      "b1": 32,
      "b2": 7.8,
      "b3": 12,
      "b4": 10,
      "b5": 12,
      "b6": 6,
      "b7": 9,
      "b8": 12.7,
      "b9": 5.9
    },
    {
      "dataDate": "6月",
      "a1": 11,
      "a2": 2,
      "a3": 4,
      "a4": 5,
      "a5": 0,
      "a6": 12,
      "a7": 4,
      "a8": 4,
      "a9": 4,
      "b1": 15.7,
      "b2": 12.9,
      "b3": 22,
      "b4": 11,
      "b5": 4,
      "b6": 10,
      "b7": 20,
      "b8": 8,
      "b9": 9
    },
    {
      "dataDate": "7月",
      "a1": 20,
      "a2": 13,
      "a3": 8,
      "a4": 3,
      "a5": 2,
      "a6": 9,
      "a7": 6,
      "a8": 4,
      "a9": 8,
      "b1": 14,
      "b2": 9.8,
      "b3": 8,
      "b4": 9,
      "b5": 3,
      "b6": 8,
      "b7": 10.1,
      "b8": 11,
      "b9": 5
    },
    {
      "dataDate": "8月",
      "a1": 15,
      "a2": 31,
      "a3": 18,
      "a4": 12,
      "a5": 5,
      "a6": 10,
      "a7": 10,
      "a8": 1,
      "a9": 9,
      "b1": 34,
      "b2": 10,
      "b3": 19.4,
      "b4": 8.6,
      "b5": 23,
      "b6": 19,
      "b7": 9.9,
      "b8": 8.9,
      "b9": 6
    },
    {
      "dataDate": "9月",
      "a1": 17,
      "a2": 18,
      "a3": 10,
      "a4": 10,
      "a5": 7,
      "a6": 9,
      "a7": 8,
      "a8": 5,
      "a9": 2,
      "b1": 54,
      "b2": 9.8,
      "b3": 22,
      "b4": 9,
      "b5": 10.9,
      "b6": 8,
      "b7": 10.1,
      "b8": 11,
      "b9": 5
    },
    {
      "dataDate": "10月",
      "a1": 14,
      "a2": 18,
      "a3": 12,
      "a4": 6,
      "a5": 10,
      "a6": 4,
      "a7": 8,
      "a8": 2,
      "a9": 2,
      "b1": 14,
      "b2": 10.9,
      "b3": 12,
      "b4": 10,
      "b5": 12,
      "b6": 8,
      "b7": 6.5,
      "b8": 11.3,
      "b9": 5.9
    }
  ];
  constructor() {
  }

  ngOnInit() {
    this.loadEchart(this.lineres);
  }

  loadEchart(res: any) {
    this.loading = true;
    const linechartData = [];
    const linechartXdata: Array<any> = [];


  }
}
