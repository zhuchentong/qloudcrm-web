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

    tasks: Array = [];

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
      this.tasks.push({"state": "处理中", "time": "1小时前", "content": "查看风险报表，检查风险统计数据", "author": "刘虎网", "process": "已分配"});
    }
    ngOnChanges() {
        $('#task').css('width', this.wdata9);
        $('#task').css('height', this.hdata9);
        $('.task-item').css('height', this.hdata9 * 0.22);
    }
}
