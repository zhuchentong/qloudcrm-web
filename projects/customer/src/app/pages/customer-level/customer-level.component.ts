import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core'
import { ModalService } from '@app/shared/utils'
import { QlMessageService } from 'qloud-angular'
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-customer-level',
  templateUrl: './customer-level.component.html',
  styleUrls: ['./customer-level.component.css'],
  providers: [ApiService, QlMessageService]
})
export class CustomerLevelComponent implements OnInit {
  @ViewChild('searchList', { static: true })
  private searchListTemp: TemplateRef<any>

  public customerList = []
  public seltimes = [
    { value: '近一个月', label: '近一个月' },
    { value: '近三个月', label: '近三个月' },
    { value: '近六个月', label: '近六个月' },
    { value: '近一年', label: '最近一年' }
  ]

  public customerlevels = []

  public customerType = [
    {
      ctnum: '212',
      ctup: '32',
      ctdown: '54',
      ctwealth: '19',
      ctbank: '9',
      ctplatinum: '6',
      ctgold: '11',
      ctpotential: '45',
      ctordinary: '107'
    }
  ]

  changeData = [
    {name:"私行客户（600万以上）", "up": 5, "down": 1, "total":0},
    {name:"钻石客户（300万-600万）", "up": 15, "down": 4, "total":0},
    {name:"白金客户（100万-300万）", "up": 20, "down": 1, "total":0},
    {name:"黄金客户（50万-100万）", "up": 45, "down": 9, "total":0},
    {name:"白银客户（20万-50万）", "up": 23, "down": 11, "total":0},
    {name:"优质客户（5万-20万）", "up": 87, "down": 21, "total":0},
    {name:"价值客户（1万-5万）", "up": 198, "down": 108, "total":0},
    {name:"大众客户（0-1万）", "up": 342, "down": 128, "total":0},
  ];

  labelres = [
    {
      "dataDate": "2019-09-20",
      "a1": 10,
      "a2": 30,
      "a3": 60,
      "a4": 76,
      "a5": 60,
      "a6": 100,
      "a7": 150,
      "a8": 100,
    },
    {
      "dataDate": "2019-09-24",
      "a1": 10,
      "a2": 29,
      "a3": 79,
      "a4": 70,
      "a5": 70,
      "a6": 105,
      "a7": 140,
      "a8": 95
    },
    {
      "dataDate": "2019-09-26",
      "a1": 13,
      "a2": 25,
      "a3": 80,
      "a4": 69,
      "a5": 71,
      "a6": 132,
      "a7": 141,
      "a8": 122
    },
    {
      "dataDate": "2020-09-28",
      "a1": 12,
      "a2": 32,
      "a3": 63,
      "a4": 76,
      "a5": 65,
      "a6": 105,
      "a7": 148,
      "a8": 115
    },
    {
      "dataDate": "2020-10-02",
      "a1": 11,
      "a2": 29,
      "a3": 67,
      "a4": 70,
      "a5": 65,
      "a6": 110,
      "a7": 170,
      "a8": 110
    }
  ];

  labelOption: Array<any> = [{
    // color: ['#f95372', '#f4c63d', '#40daf1', '#00abff', '#8bd22f'],
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
      data:[]
    },
    grid: {
      top: '80',
      left: '3%',
      right: '4%',
      bottom: '4%',
      containLabel: true
    },
    toolbox: {
      show: false,
      top: 10,
      right: 20,
      feature: {
        myTool1: {
          show: true,
          title: '数据列表',
          icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
          onclick:() => {
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
    yAxis: [
      {
        type: 'value',
        name: '人数',
        min: 0,
        max: 200,
        axisLabel: {
          formatter: '{value} 人'
        }
      }],
    series: []
  }];
  loading = false;

  constructor(private apiService: ApiService, private modal: ModalService, private message: QlMessageService) {}

  ngOnInit() {
    this.apiService.getcustomerLevelList().subscribe(data => {
      this.customerlevels = data
    })

    this.apiService.getCustomerList().subscribe(data => {
      this.customerList = data.sort(x => 0.5 - Math.random())
    })

    var uptotal = 0, downtotal = 0;
    this.changeData.forEach((item, index) => {
      item.total = item.down + item.up;
      uptotal += item.up;
      downtotal += item.down;
    });

    this.loadEchart(this.labelres);

    this.changeData.push({"name": "合计", "up":uptotal, "down": downtotal, "total":(uptotal+downtotal)});
  }

  loadEchart(res: any) {
    this.loading = true;
    const linechartData = [];
    const linechartXdata: Array<any> = [];
    const lengend: Array<any> = [];

    this.changeData.forEach((item, index) => {
      var data = {
        name: item.name,
        smooth: true,
        type: 'bar',
        data: []
      };

      lengend.push(item.name);

      for (let n = 0; n < res.length; n++) {
        data.data.push(res[n]['a' + (index+1)]);
      }
      linechartData.push(data);
    })

    for (let k = 0; k < res.length; k++) {
      linechartXdata.push(res[k]['dataDate']);
    }
    const set = new Set(linechartXdata);
    const dateList = Array.from(set);
    this.labelOption[1] = {
      legend: {
        data:lengend
      },
      xAxis: {
        data: dateList,
      },
      series: linechartData
    };
    this.loading = false;

  }


  public queryCustomer() {
    this.modal
      .open({
        title: '客户列表',
        component: this.searchListTemp
      })
      .subscribe(() => {})
  }
}
