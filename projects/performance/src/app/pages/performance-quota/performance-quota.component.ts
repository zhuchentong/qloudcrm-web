import {Component, EventEmitter, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ApiService} from "../../services/api.service";
import {ModalService} from "@shared/utils";
import {QlMessageService} from "qloud-angular/package/message/message.service";
import {Router} from "@angular/router";
import {single} from "rxjs/operators";

@Component({
  selector: 'app-performance-quota',
  templateUrl: './performance-quota.component.html',
  styleUrls: ['./performance-quota.component.scss']
})
export class PerformanceQuotaComponent implements OnInit {
  markValue = "00";
  markValue2 = "00";
  isdisplay = true;
  isdisplay2 = true;
  public content: ViewContainerRef
  @ViewChild('tagUser', { static: true })
  private tagUser

  change(param){
    if(this.markValue == "00"){
      this.isdisplay = true;
    }
    if(this.markValue == "11"){
      this.isdisplay = false;
    }
  }
  change2($event){
    if(this.markValue2 == "00"){
      this.isdisplay2 = true;
    }
    if(this.markValue2 == "11"){
      this.isdisplay2 = false;
    }
  }
  options = [ {
    tooltip : {
      trigger: 'axis',
      axisPointer : {            // 坐标轴指示器，坐标轴触发有效
        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis:  {
      type: 'value'
    },
    yAxis: {
      type: 'category',
      data: []
    },
    series: [
      {
        name: '占比',
        type: 'bar',
        stack: '总量',
        barWidth: 30,
        itemStyle:{
          normal: {
            color: '#06d3cd',
            barBorderRadius: [20, 20, 20, 20],
          }
        },
        label: {
          normal: {
            show: true,
            position: 'insideRight'
          }
        },
        z:  10,
        data: [20, 35,50]
      }
    ]
  },
    {
      tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis:  {
        type: 'value'
      },
      yAxis: {
        type: 'category',
        data: []
      },
      series: [
        {
          name: '净利润',
          type: 'bar',
          stack: '总量',
          barWidth: 30,
          itemStyle:{
            normal: {
              color: '#06d3cd',
              barBorderRadius: [20, 20, 20, 20],
            }
          },
          label: {
            normal: {
              show: true,
              position: 'insideRight'
            }
          },
          z:  10,
          data: []
        },
        {
          name: '',
          type: 'bar',
          stack: '总量',
          barWidth: 30,
          itemStyle:{
            normal: {
              color: '#D5CBE8',
              barBorderRadius: [20, 20, 20, 20],
            }
          },
          label: {
            normal: {
              show: true,
              position: 'insideRight'
            }
          },
          z:  10,
          data: []
        }
      ]
    }]
  options2 = [ {
    tooltip : {
      trigger: 'axis',
      axisPointer : {            // 坐标轴指示器，坐标轴触发有效
        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis:  {
      type: 'value'
    },
    yAxis: {
      type: 'category',
      data: []
    },
    series: [
      {
        name: '占比',
        type: 'bar',
        stack: '总量',
        barWidth: 30,
        itemStyle:{
          normal: {
            color: '#06d3cd',
            barBorderRadius: [20, 20, 20, 20],
          }
        },
        label: {
          normal: {
            show: true,
            position: 'insideRight'
          }
        },
        z:  10,
        data: [20, 35,50]
      }
    ]
  },
    {
      tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis:  {
        type: 'value'
      },
      yAxis: {
        type: 'category',
        data: []
      },
      series: [
        {
          name: '净利润',
          type: 'bar',
          stack: '总量',
          barWidth: 30,
          itemStyle:{
            normal: {
              color: '#06d3cd',
              barBorderRadius: [20, 20, 20, 20],
            }
          },
          label: {
            normal: {
              show: true,
              position: 'insideRight'
            }
          },
          z:  10,
          data: []
        },
        {
          name: '净利润',
          type: 'bar',
          stack: '总量',
          barWidth: 30,
          itemStyle:{
            normal: {
              color: '#D5CBE8',
              barBorderRadius: [20, 20, 20, 20],
            }
          },
          label: {
            normal: {
              show: true,
              position: 'insideRight'
            }
          },
          z:  10,
          data: []
        }
      ]
    }]
  twoIndex = 1;
  public formGroup: FormGroup = this.fb.group({})
  constructor(   private apiService: ApiService,
                 private fb: FormBuilder,
                 public modal: ModalService,
                 private message: QlMessageService,
                 private router: Router) { }
  public orgList: any[] = [];
  public custList: any[] = [];
  typelist = [{value:"00",label:" 表 格 "},
    {value:"11",label:" 柱 形 图 "}]
  ngOnInit() {
    this.formGroup = this.fb.group({ name: ['custName'] })
    this.onRefresh()
    this.content = this.tagUser
  }

  public onRefresh() {

    this.apiService.getOrgBankList().subscribe(data => {
      this.orgList = data
    });
    this.apiService.getCustBankList().subscribe(data => {
      this.custList = data.sort(x => 0.5 - Math.random())
    });
  }
  twoHandle(index: number): void {
    this.twoIndex = index;
  }
  public onChangeTab(content) {
    this.content = content;
    this.isdisplay = true;
    this.isdisplay2 = true;
  }
  handle(event: any,param):void {

    if(event== "00"){
      this.isdisplay = true;
    }
    if(event == "11"){
      this.options[1]['yAxis']['data'] =[];
      this.options[1]['series'][0]['data']=[];
      this.options[1]['series'][0]['name']="";
      this.options[1]['series'][1]['data']=[];
      this.options[1]['series'][1]['name']="";
      this.isdisplay = false;
      this.custList.sort(function (a, b) {
        if (a.rank < b.rank) {
          return -1;
        }
        if (a.rank > b.rank) {
          return 1;
        }
        return 0;
      });
      if(param =='1'){
        for(let i= 0;i<this.custList.length;i++){
          this.options[1]['yAxis']['data'].push(this.custList[i]['custName']);
          this.options[1]['series'][0]['data'].push(this.custList[i]['netProfits']);
          this.options[1]['series'][0]['name']="净利润";
        }
      }else if(param =='2'){
        this.options[1]['legend']= {
          data:  ['销售量', '销售金额'],
          selectedMode: 'single'
        }
        this.options[1]['series'][0]['name'] = "销售量";
        this.options[1]['series'][1]['name'] = "销售金额";
        for(let i= 0;i<this.custList.length;i++) {
          this.options[1]['yAxis']['data'].push(this.custList[i]['custName']);
          this.options[1]['series'][0]['data'].push(this.custList[i]['saleCount']);
          this.options[1]['series'][1]['data'].push(this.custList[i]['saleAmount']);
        }

      }else if(param =='3'){
        this.options[1]['legend']= {
          data:  ['客户等级提升数', '客户AUM提升数'],
          selectedMode: 'single'
        }
        this.options[1]['series'][0]['name'] = "客户等级提升数";
        this.options[1]['series'][1]['name'] = "客户AUM提升数";
        for(let i= 0;i<this.custList.length;i++){
          this.options[1]['yAxis']['data'].push(this.custList[i]['custName']);
          this.options[1]['series'][0]['data'].push(this.custList[i]['levelCount']);
          this.options[1]['series'][1]['data'].push(this.custList[i]['aumCount']);
        }

      }else if(param =='4'){
        for(let i= 0;i<this.custList.length;i++){
          this.options[1]['yAxis']['data'].push(this.custList[i]['custName']);
          this.options[1]['series'][0]['data'].push(this.custList[i]['taskCount']);
          this.options[1]['series'][0]['name']="任务完成数";
        }
      }

    }
  }
  handle2(event: any,param):void {
    if(event== "00"){
      this.isdisplay2 = true;
    }
    if(event == "11"){
      this.options2[1]['yAxis']['data'] =[];
      this.options2[1]['series'][0]['data']=[];
      this.options2[1]['series'][1]['data']=[];
      this.options2[1]['series'][0]['name']="";
      this.options2[1]['series'][1]['name']="";
      this.isdisplay2 = false;
      this.orgList.sort(function (a, b) {
        if (a.rank < b.rank) {
          return -1;
        }
        if (a.rank > b.rank) {
          return 1;
        }
        return 0;
      });
      if(param =='1'){
        for(let i= 0;i<this.orgList.length;i++){
          this.options2[1]['yAxis']['data'].push(this.orgList[i]['orgName']);
          this.options2[1]['series'][0]['data'].push(this.orgList[i]['netProfits']);
          this.options2[1]['series'][0]['name']="净利润";
        }
      }else if(param =='2'){
        this.options2[1]['legend']= {
          data:  ['销售量', '销售金额'],
          selectedMode: 'single'
        }
        this.options2[1]['series'][0]['name'] = "销售量";
        this.options2[1]['series'][1]['name'] = "销售金额";
        for(let i= 0;i<this.orgList.length;i++){
          this.options2[1]['yAxis']['data'].push(this.orgList[i]['orgName']);
          this.options2[1]['series'][0]['data'].push(this.orgList[i]['saleCount']);
          this.options2[1]['series'][1]['data'].push(this.orgList[i]['saleAmount']);
        }
      }else if(param =='3'){
        this.options2[1]['legend']= {
          data:  ['客户等级提升数', '客户AUM提升数'],
          selectedMode: 'single'
        }
        this.options2[1]['series'][0]['name'] = "客户等级提升数";
        this.options2[1]['series'][1]['name'] = "客户AUM提升数";
        for(let i= 0;i<this.orgList.length;i++){
          this.options2[1]['yAxis']['data'].push(this.orgList[i]['orgName']);
          this.options2[1]['series'][0]['data'].push(this.orgList[i]['levelCount']);
          this.options2[1]['series'][1]['data'].push(this.orgList[i]['aumCount']);

        }
      }else if(param =='4'){
        for(let i= 0;i<this.orgList.length;i++){
          this.options2[1]['yAxis']['data'].push(this.orgList[i]['orgName']);
          this.options2[1]['series'][0]['data'].push(this.orgList[i]['taskCount']);
          this.options2[1]['series'][0]['name']="任务完成数";
        }
      }

    }
  }
}
