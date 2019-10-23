import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-params-config',
  templateUrl: './params-config.component.html',
  styleUrls: ['./params-config.component.scss']
})
export class ParamsConfigComponent implements OnInit {
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
  constructor() { }

  ngOnInit() {
  }

}
