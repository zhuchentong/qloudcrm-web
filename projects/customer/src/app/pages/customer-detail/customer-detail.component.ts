import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { ModalRef } from '@app/shared/utils'
import { QlMessageService } from 'qloud-angular'
import { plainToClass } from 'class-transformer'
import { DictService } from '@app/shared/utils/dict.service'

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css'],
  providers: [ModalRef]
})
export class CustomerDetailComponent implements OnInit {
  public valuecate:any = ''
  public valuetype:any = ''
  public prductType = [
    { value: '基金', label: '基金' },
    { value: '债劵', label: '债劵' },
    { value: '股票', label: '股票' }
  ]
  public  category = [
    { value: '小于10万', label: '小于10万' },
    { value: '10-50万', label: '10-50万' },
    { value: '50-100万', label: '50-100万' },
    { value: '大于100万', label: '大于100万' }
  ]
  public formGroup: FormGroup = this.fb.group({})

  public flagshow: any = true
  changeFlag: any = '1'
  // 数据
  public customertabledata = [
    {
      code: 'TY672233',
      name: '张三',
      level: '白金卡',
      age: '30',
      sex: '男',
      tel: '18710766789',
      producttype: '基金',
      productcode: 'HJU67680U',
      productown: '100000',
      aum: '1000000',
      balance: '300000'
    },
    {
      code: 'RF352233',
      name: '王玉环',
      level: '白金卡',
      age: '44',
      sex: '女',
      tel: '13610766789',
      producttype: '债劵',
      productcode: '15U67680U',
      productown: '400000',
      aum: '300000',
      balance: '80000'
    },
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
    },
    {
      code: '26TW33',
      name: '陈国庆',
      level: '白金卡',
      age: '33',
      sex: '男',
      tel: '18090878789',
      producttype: '基金',
      productcode: 'GHY7680U',
      productown: '30000',
      aum: '5000000',
      balance: '330000'
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
  // 切换
  handle(event) {
    this.changeFlag = event
  }

  constructor(private modalRef: ModalRef, private fb: FormBuilder) {}

  ngOnInit() {}
}
