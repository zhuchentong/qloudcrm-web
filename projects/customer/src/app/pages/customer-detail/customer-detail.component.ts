import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core'
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { QlMessageService } from 'qloud-angular'
import { plainToClass } from 'class-transformer'
import { DictService } from '@app/shared/utils/dict.service'
import { ApiService } from '../../services/api.service'

import { ModalService } from '@app/shared/utils'
@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css'],
  providers: [ApiService, QlMessageService]
})
export class CustomerDetailComponent implements OnInit {
  @ViewChild('addInfo', { static: true })
  private addInfoTemp: TemplateRef<any>

  @ViewChild('addTag', { static: true })
  private addTagTemp: TemplateRef<any>

  public valuecate: any = ''
  public valuetype: any = ''
  public prductType = [
    { value: '基金', label: '基金' },
    { value: '债劵', label: '债劵' },
    { value: '股票', label: '股票' }
  ]

  public tagCatesels = [
    { value: '1', label: '基金' },
    { value: '2', label: '债劵' },
    { value: '2', label: '保险' },
    { value: '2', label: '贷款' },
    { value: '2', label: '理财产品' },
    { value: '2', label: '存款' },
    { value: '3', label: '股票' }
  ]
  public tagTypesels = [{ value: '1', label: '手动', selected:true}]

  public category = [
    { value: '小于10万', label: '小于10万' },
    { value: '10-50万', label: '10-50万' },
    { value: '50-100万', label: '50-100万' },
    { value: '大于100万', label: '大于100万' }
  ]

  public tagTypes = [
    { value: '1', label: '基本属性' },
    { value: '2', label: '交易偏好' },
    { value: '3', label: '价值属性' },
    { value: '4', label: '风险属性' },
    { value: '5', label: '行为特征' },
    { value: '6', label: '信用特征' },
    { value: '7', label: '营销偏好' }
  ]

  public marketList = [
    {
      marketName: '健康理财宝C类',
      time: '2019-10-09 14:50:00',
      result: '未响应'
    },
    {
      marketName: '天天一份利',
      time: '2019-09-23 09:40:00',
      result: '成功'
    },
    {
      marketName: '本行基金特惠',
      time: '2019-9-10 16:20:00',
      result: '失败'
    }
  ]

  public duetoProduct = [
    {
      productName: '大额存单',
      startdate: '2016-10-23',
      enddate: '2019-11-01'
    },
    {
      productName: '封闭基金',
      startdate: '2018-01-10',
      enddate: '2019-11-31'
    },
    {
      productName: '高额理财宝',
      startdate: '2016-12-10',
      enddate: '2019-12-01'
    }
  ]

  public tagInfoList = [
    {
      tagname: '有车一族',
      tagtype: '手动标签',
      tagtime: '2016-12-12'
    },
    {
      tagname: '有房一族',
      tagtype: '手动标签',
      tagtime: '2014-10-01'
    }
  ]

  public shopsList = [
    {
      place: '高新万达',
      time: '2019-10-10'
    },
    {
      place: '曲江车展',
      time: '2019-09-20'
    },
    {
      place: '高新博览会',
      time: '2019-08-17'
    },
    {
      place: '高新万达',
      time: '2019-08-01'
    }
  ]

  public tradTypes = [
    { value: '1', label: '存款' },
    { value: '2', label: '理财' },
    { value: '3', label: '基金' },
    { value: '4', label: '保险' },
    { value: '5', label: '贷款' },
    { value: '6', label: '股票' }
  ]

  public tradList = [
    {
      tradname: '生活消费',
      tradtype: '支出',
      tradtime: '2019-10-11',
      tradaccount: '建设银行(620090293920028987)'
    },
    {
      tradname: '基金提取',
      tradtype: '收入',
      tradtime: '2019-09-30',
      tradaccount: '建设银行(620090293920028987)'
    },
    {
      tradname: '大额存单',
      tradtype: '收入',
      tradtime: '2019-09-23',
      tradaccount: '招商银行(620090293920028987)'
    }
  ]

  public baseInfo = [
    {
      name: '陈先',
      age: '38',
      sex: '男',
      tel: '18710966754',
      address: '西安市高新区',
      fdmilynum: '4',
      emali: '18710966754@163.com',
      wx: '',
      qq: '',
      job: '律师',
      contact: '',
      like: ''
    }
  ]

  public tagInfo = [
    {
      tagname: '基金达人',
      tagcate: '投资类',
      tagtype: '手动标签',
      tagtime: '2019-01-12'
    },
    {
      tagname: '保险活跃分子',
      tagcate: '保险类',
      tagtype: '手动标签',
      tagtime: '2018-11-10'
    },
    {
      tagname: '理财达人',
      tagcate: '投资类',
      tagtype: '数字标签',
      tagtime: '2017-07-01'
    }
  ]
  public formGroup: FormGroup = this.fb.group({})
  public changeFlag: any = '1'
  // 数据
  public customertabledata = [
    {
      code: 'UKO672233',
      name: '陈先',
      level: '白金卡',
      age: '27',
      sex: '男',
      tel: '18945322341',
      producttype: '基金',
      productcode: 'KLU67680U',
      productown: '100000',
      aum: '2000000',
      balance: '500000'
    }
  ]

  tableDataMore = [
    {
      time: '余额(张数)',
      financial: '20',
      基金: '1',
      bonds: '',
      insurance: '2',
      deposit: '60',
      housing: '20',
      loans: '',
      credit: '2',
      debit: '3',
      other: ''
    }
  ]
  // 产品分布
  public options1 = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      x: 'left',
      data: ['负债', '资产', '流动性负债', '定期存款', '投资资产', '零售贷款', '现金及现金等价']
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        magicType: {
          show: true,
          type: ['pie', 'funnel']
        },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    calculable: false,
    series: [
      {
        name: '资产占比',
        type: 'pie',
        selectedMode: 'single',
        radius: [0, 70],
        // for funnel
        x: '20%',
        width: '40%',
        funnelAlign: 'right',
        max: 1548,
        itemStyle: {
          normal: {
            label: {
              position: 'inner'
            },
            labelLine: {
              show: false
            }
          }
        },
        data: [{ value: 679, name: '负债' }, { value: 1548, name: '资产', selected: true }]
      },
      {
        name: '资产占比',
        type: 'pie',
        radius: [100, 140],
        x: '60%',
        width: '35%',
        funnelAlign: 'left',
        max: 1048,
        data: [
          { value: 335, name: '流动性负债' },
          { value: 135, name: '零售贷款' },
          { value: 1310, name: '定期存款' },
          { value: 234, name: '投资资产' },
          { value: 348, name: '现金及现金等价' }
        ]
      }
    ]
  }

  // 推荐产品
  public tjcpdata = []

  public contactData = []

  // 切换
  handle(event) {
    this.changeFlag = event
  }

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    public modal: ModalService,
    private message: QlMessageService
  ) {}

  ngOnInit() {
    this.apiService.getcostomerDetaildkList().subscribe(data => {
      this.tjcpdata = data
    })
    this.apiService.getcustomerDetailcontact().subscribe(data => {
      this.contactData = data
    })
  }

  public addInfoFun() {
    this.modal
      .open({
        title: '基本信息补充',
        component: this.addInfoTemp
      })
      .subscribe(() => {
        this.message.success('sucess')
      })
  }

  public addTagFun() {
    this.modal
      .open({
        title: '手动添加标签',
        component: this.addTagTemp
      })
      .subscribe(() => {
        this.message.success('sucess')
      })
  }
}
