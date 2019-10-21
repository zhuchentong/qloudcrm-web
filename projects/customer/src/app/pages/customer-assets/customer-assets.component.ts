import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core'
import { ModalService } from '@app/shared/utils'
import { QlMessageService } from 'qloud-angular'
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-customer-assets',
  templateUrl: './customer-assets.component.html',
  styleUrls: ['./customer-assets.component.css'],
  providers: [ApiService]
})
export class CustomerAssetsComponent implements OnInit {
  @ViewChild('searchList', { static: true })
  private searchListTemp: TemplateRef<any>
  public dataassets = []
  public customerList = []
  public seltimes = [
    { value: '一周内', label: '一周内' },
    { value: '一月内', label: '一月内' },
    { value: '三月内', label: '三月内' },
    { value: '半年内', label: '半年内' },
    { value: '一年内', label: '一年内' }
  ]



  changeData = [
    {name:"存款", "up": 30, "down": '300,000.00', "total": '2,300,000.00'},
    {name:"贷款", "up": 45, "down": '4,398,230.00', "total": '387,453,090.00'},
    {name:"理财", "up": 109, "down": '500,000.00', "total": '63,474,600.00'},
    {name:"基金", "up": 201, "down": '7,659,000.00', "total":'66,980,000.00'}
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
        max: 100,
        axisLabel: {
          formatter: '{value} 人'
        }
      },
      {
        type: 'value',
        name: '金额',
        min: 0,
        max: 175,
        axisLabel: {
          formatter: '{value} 万元'
        }
      }],
    series: []
  }];
  loading = false;

  constructor(private apiService: ApiService, public modal: ModalService, private message: QlMessageService) {}

  ngOnInit() {
    this.apiService.getcustomerAssetsList().subscribe(data => {
      this.dataassets = data
    })

    this.apiService.getCustomerList().subscribe(data => {
      this.customerList = data.sort(x => 0.5 - Math.random())
    })

    this.loadEchart(this.labelres);
  }

  public queryCustomer() {
    this.modal
      .open({
        title: '客户列表',
        component: this.searchListTemp
      })
      .subscribe(() => {})
  }


  loadEchart(res: any) {
    this.loading = true;
    const linechartData = [];
    const linechartXdata: Array<any> = [];
    const lengend: Array<any> = [];

    for(var index=0; index<this.changeData.length;index++) {
      var data = {
        name: this.changeData[index].name + '资产变动客户数',
        smooth: true,
        type: 'line',
        data: []
      };

      lengend.push(this.changeData[index].name + '资产变动客户数');

      for (let n = 0; n < res.length; n++) {
        data.data.push(res[n]['a' + (index+1)]);
      }
      linechartData.push(data);
    }

    for(var index=0; index<this.changeData.length;index++) {
      var data = {
        name: this.changeData[index].name + '资产变动金额',
        smooth: true,
        yAxisIndex: 1,
        type: 'bar',
        data: []
      };

      lengend.push(this.changeData[index].name + '资产变动金额');

      for (let n = 0; n < res.length; n++) {
        data.data.push(res[n]['a' + (index+5)]);
      }
      linechartData.push(data);
    }

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
}
