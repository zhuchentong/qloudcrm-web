import { Component, OnInit } from '@angular/core'
import { Location } from '@angular/common'
import { ApiService } from '../../services/api.service'
import { FormBuilder } from '@angular/forms'
import { ModalService } from '@shared/utils'
import { PageService } from '@core/http'
import { QlMessageService } from 'qloud-angular/package/message/message.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-recommend-detial',
  templateUrl: './recommend-detial.component.html',
  styleUrls: ['./recommend-detial.component.scss'],
  providers: [ModalService, PageService]
})
export class RecommendDetialComponent implements OnInit {
  public back: boolean = true
  public tagTypes = [
    { value: '1', label: '基本属性' },
    { value: '2', label: '交易偏好' },
    { value: '3', label: '价值属性' },
    { value: '4', label: '风险属性' },
    { value: '5', label: '行为特征' },
    { value: '6', label: '信用特征' },
    { value: '7', label: '营销偏好' }
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

  public contactData = [
    { bussiness: '办理贷款', chandel: '手机app', time: '2019-9-12' },
    { bussiness: '大额存单', chandel: '网上银行', time: '2019-9-20' },
    { bussiness: '基金到期提取', chandel: '网上银行', time: '2019-10-01' },
    { bussiness: '贷款还款', chandel: '手机app', time: '2019-10-10' },
    { bussiness: '办理理财产品', chandel: '网上银行', time: '2019-10-07' },
    { bussiness: '大额存单', chandel: '网上银行', time: '2019-10-08' },
    { bussiness: '贷款还款', chandel: '手机app', time: '2019-10-12' }
  ]

  public recommendRecord = [
    {
      contactTime: '2010-01-01',
      product: '健康理财宝C类',
      right: '会员码',
      channel: '手机APP',
      record: '推荐过程',
      result: '确认购买'
    },
    {
      contactTime: '2011-03-01',
      product: '天天一份利',
      right: '现金红包券',
      channel: '呼叫中心',
      record: '推荐过程',
      result: '感兴趣，后期购买'
    },
    {
      contactTime: '2012-02-01',
      product: '聚益生金A',
      right: '现金红包券',
      channel: '客户经理',
      record: '推荐过程',
      result: '犹豫期期待跟进'
    },
    {
      contactTime: '2013-06-01',
      product: '健康理财宝C类',
      right: '现金抵用券',
      channel: '网点柜面',
      record: '推荐过程',
      result: '不感兴趣'
    },
    {
      contactTime: '2014-07-01',
      product: '聚益生金A',
      right: '话费充值包',
      channel: '手机APP',
      record: '推荐过程',
      result: '客户联系不到'
    },
    {
      contactTime: '2015-09-01',
      product: '天天一份利',
      right: '话费充值包',
      channel: '手机APP',
      record: '推荐过程',
      result: '客户联系方式无效'
    },
    {
      contactTime: '2016-10-01',
      product: '朝朝盈',
      right: '电影票',
      channel: '呼叫中心',
      record: '推荐过程',
      result: '犹豫期期待跟进'
    },
    {
      contactTime: '2017-11-01',
      product: '健康理财宝B类',
      right: '电影票',
      channel: '客户经理',
      record: '推荐过程',
      result: '感兴趣，后期购买'
    },
    {
      contactTime: '2018-12-01',
      product: '聚益生金C',
      right: '兑换券',
      channel: '手机APP',
      record: '推荐过程',
      result: '确认购买'
    }
  ]

  constructor(
    public location: Location,
    private apiService: ApiService,
    private fb: FormBuilder,
    public modal: ModalService,
    public pageService: PageService,
    private message: QlMessageService,
    private router: Router
  ) {}

  ngOnInit() {}
}
