import {Component, Input, OnInit} from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
    @Input()  hdata10: any; // 接收父组件传递的高度值
    @Input()  wdata10: any;
    date = new Date();
    d = this.date.getDate();
    m = this.date.getMonth();
    y = this.date.getFullYear();
    task = [
        {
            title: '全天计划\r\n#####\r\n写代码',
            color: '#a0d468',
            textColor: '#FFFFFF',
            start: new Date(this.y, this.m, 1)
            //     color	背景和边框颜色。
            // backgroundColor	背景颜色。
            // borderColor	边框颜色。
            // textColor	文本颜色。
        },
        {
            title: '张家界四日游',
            color: '#ffce55',
            textColor: '#FFFFFF',
            start: new Date(this.y, this.m, this.d - 5),
            end: new Date(this.y, this.m, this.d - 2)
        },
        {
            id: 999,
            title: '电话回访客户',
            color: '#fb6e52',
            textColor: '#FFFFFF',
            start: new Date(this.y, this.m, this.d - 6, 16, 0),
            allDay: false
        },
        {
            id: 999,
            title: '电话回访客户',
            color: '#fb6e52',
            textColor: '#FFFFFF',
            start: new Date(this.y, this.m, this.d + 4, 16, 0),
            allDay: false
        },
        {
            title: '视频会议',
            color: '#fb6e52',
            textColor: '#FFFFFF',
            start: new Date(this.y, this.m, this.d, 10, 30),
            allDay: false
        },
        {
            title: '中秋放假',
            start: '2013-09-19',
            end: '2013-09-21'
        },
        {
            title: '午饭',
            color: '#a0d468',
            textColor: '#FFFFFF',
            start: new Date(this.y, this.m, this.d, 12, 0),
            end: new Date(this.y, this.m, this.d, 14, 0),
            allDay: false
        }
    ];
  constructor() { }
    ngOnChanges() {
        $('#calendar').fullCalendar('option', 'height', this.hdata10);
        $('#calendarDiv').css('width', this.wdata10);
    }
  ngOnInit() {
      const that = this;
      setTimeout(function () {
          that.loadCalendar();

      }, 100);
      // Open right sidebar
      $('.open-right-sidebar').on('click', function (event) {
          event.preventDefault();
          $('.right-sidebar, .right-sidebar .sidebar-content').css('right', '0px');
      });
      $('.right-sidebar .close-icon').on('click', function (event) {
          event.preventDefault();
          $('.right-sidebar, .right-sidebar .sidebar-content').css('right', '-400px');
      });

      // this.loadCalendar();
  }
    loadCalendar() {
        const that = this; // 注意这里的this指向（that代表ts的this）
        $('#calendar').fullCalendar({
            // locale: "zh-cn",//使用中文
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'timelineYear,month,agendaWeek,agendaDay'
            },
            buttonText: {//按钮文本
                prev: '‹',
                next: '›',
                today: '今天',
                month: '月',
                week: '周',
                day: '日'
            },
            allDayText: '全天',
            // themeSystem: "bootstrap3",
            droppable: false,
            editable: true,
            eventLimit: true,
            selectable: true,
            selectHelper: true,
            height: this.hdata10,
            events: this.task, // 任务数据
            dayClick: function (date, allDay, jsEvent, view) {
                console.log(date);
            },
            eventClick: function (event) {
                console.log(event);
            },
        });
    }


    makeRandomDataProvider() {
        const dataProvider = [];

        // Generate random data
        for (let year = 1985; year <= 2005; ++year) {
            dataProvider.push({
                year: '' + year,
                value: Math.floor(Math.random() * 100) - 50
            });
        }

        return dataProvider;
    }
}
