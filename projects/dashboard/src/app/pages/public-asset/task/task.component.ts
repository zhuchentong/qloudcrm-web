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

    tasks: Array<Object> = [];

    constructor() { }

    ngOnInit() {
        $('task-item').css('height', '150px');


      // <div class="task-state">
      // <span class="label label-yellow">
      //   处理中
      //   </span>
      //   </div>
      //   <div class="task-time">1小时前</div>
      // <div class="task-body">查看风险报表，检查风险统计数据</div>
      // <div class="task-creator"><a href="">刘虎网</a></div>
      // <div class="task-assignedto">已分配</div>
      this.tasks.push({"id": "1", "state": "风险提醒", "time": "1小时前", "content": "2018-09-10客户王丽贷款逾期", "author": "查看", "process": "已处理", "level":1});
      this.tasks.push({"id": "2", "state": "风险提醒", "time": "1天前", "content": "2018-09-06客户张强信用卡逾期", "author": "查看", "process": "已处理", "level":1});
      this.tasks.push({"id": "3", "state": "营销提醒", "time": "1天前", "content": "郑成功（大堂经理）转推荐客户郑美丽", "author": "查看", "process": "未处理", "level":2});
      this.tasks.push({"id": "4", "state": "营销活动", "time": "1天前", "content": "鑫易贷产品旺季活动营销通知", "author": "查看", "process": "未处理", "level":2});
      this.tasks.push({"id": "5", "state": "工作任务", "time": "1天前", "content": "总行产品经理下发工作任务", "author": "查看", "process": "未处理", "level":3});
      // this.tasks.push({"id": "6", "state": "工作任务", "time": "1天前", "content": "贷款首次检测提醒", "author": "查看", "process": "未处理", "level":3});
    }
    ngOnChanges() {
        $('#task').css('width', this.wdata9);
        $('#task').css('height', this.hdata9);
        $('.task-item').css('height', this.hdata9 * 0.17);
    }
}
