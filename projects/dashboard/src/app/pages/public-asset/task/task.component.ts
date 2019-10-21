import {Component, Input, OnInit} from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
    @Input()  hdata9: any; // 接收父组件传递的高度值
    @Input()  wdata9: any;

    index ='1';
    tabIndex = '1';

    tasks: Array<Object> = [];
    tasks1: Array<Object> = [];
    tasks2: Array<Object> = [];
    tasks3: Array<Object> = [];

    constructor() { }

    ngOnInit() {

      this.tasks.push({"id": "1", "type": "客户转推荐", "time": "2018-09-20", "content": "郑成功转推荐客户郑美丽",  "process": "未查看", "level":2, "customerName":"郑美丽", "date":"2018-09-15"});
      this.tasks.push({"id": "4", "type": "大额异动", "time": "2018-09-20", "content": "客户王丽于2018-09-10取款¥200,000.00", "process": "已查看", "level":1, "customerName":"王丽", "date":"2018-09-10"});
      this.tasks.push({"id": "5", "type": "理财到期", "time": "2018-09-20", "content": "客户张扬于的理财产品到期", "process": "已查看", "level":1, "customerName":"张扬", "date":"2018-09-10"});
      this.tasks.push({"id": "6", "type": "贷款首次检测", "time": "2018-09-20", "content": "贷款首次检测提醒", "process": "未查看", "level":3, "customerName":"王珊", "date":"2018-09-10"});

      this.tasks1.push({"id": "1", "type": "客户生日", "time": "2018-09-20", "content": "客户张强将于2019-09-25生日", "process": "已查看", "level":1,"customerName":"张强", "date":"2018-09-06"});
      this.tasks1.push({"id": "2", "type": "到店", "time": "2018-09-20", "content": "客户郑美丽于2019-09-15到店办理业务",  "process": "未查看", "level":2, "customerName":"郑美丽", "date":"2018-09-15"});
      this.tasks1.push({"id": "3", "type": "营销反馈", "time": "2018-09-20", "content": "客户陈晨在网上银行浏览理财产品",  "process": "未查看", "level":2, "customerName":"陈晨", "date":"2018-09-18"});
      this.tasks1.push({"id": "4", "type": "基金盈亏", "time": "2018-09-20", "content": "客户郑美丽的基金产品已亏超10%",  "process": "已查看", "level":2, "customerName":"郑美丽", "date":"2018-09-15"});


      this.tasks2.push({"id": "1", "type": "客户降级", "time": "2018-09-20", "content": "客户杨阳的客户等级降级",  "process": "已查看", "level":2, "customerName":"杨阳", "date":"2018-09-21"});
      this.tasks2.push({"id": "2", "type": "贷款到期", "time": "2018-09-20", "content": "客户李山的贷款到期",  "process": "未查看", "level":2, "customerName":"李山", "date":"2018-09-20"});
      this.tasks2.push({"id": "3", "type": "信用卡逾期", "time": "2018-09-20", "content": "客户张强信用卡逾期", "process": "已查看", "level":1,"customerName":"张强", "date":"2018-09-06"});
      this.tasks2.push({"id": "4", "type": "客户流失预警", "time": "2018-09-20", "content": "客户张强降级为普卡用户且信用卡逾期", "process": "已查看", "level":1,"customerName":"张强", "date":"2018-09-06"});

      this.tasks3.push({"id": "6", "type": "营销活动", "time": "2018-09-20", "content": "鑫易贷产品旺季活动营销通知", "process": "未查看", "level":2, "customerName":"郑美丽", "date":"2018-09-15"});

    }
    ngOnChanges() {
    }

  handle(index: string): void {
    this.tabIndex = index;
  }
}
