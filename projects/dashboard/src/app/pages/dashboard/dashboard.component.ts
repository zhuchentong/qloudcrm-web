import {Component, OnInit, ViewChild} from '@angular/core';
import $ from 'jquery';
import 'fullcalendar';
import {GridsterConfig, GridsterItem} from 'angular-gridster2';

import {QlNotificationService} from "qloud-angular/package/notification/notification.service";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    // template: '<ng-template #investContainer></ng-template>',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    data5 = '400px';
    data6 = '400px';
    data7 = '400px';
    data8 = '400px';
    heightData9: any;
    widthData9: any;
    heightData91: any;
    widthData91: any;
    heightData10: any;
    widthData10: any;
    widthData101: any;
    heightData101: any;
    public options: GridsterConfig;
    public dashboard: Array<any>;
    fullscreen = 'fullscreen';
    fullscreenIndex = '';
    public echartsInstance1: any;
    public echartsInstance2: any;
    UserId = '';
    constructor( private notify: QlNotificationService) {
    }
    /*查询*/
    query(id) {
        var res = JSON.parse(sessionStorage.getItem('layout'));


            this.dashboard = res.components;
            let data: any;
            data = JSON.stringify(this.dashboard).replace(/isDisplay/g, 'display');
            data = data.replace(/height/g, 'rows');
            data = data.replace(/width/g, 'cols');
            data = data.replace(/compId/g, 'id');
            data = data.replace(/isMaxenable/g, 'maxenable');
            this.dashboard =  JSON.parse(data);
            this.dashboard.sort(function (a, b) {
                if (a.x < b.x) {
                    return -1;
                }
                if (a.x > b.x) {
                    return 1;
                }
                if (a.x === b.x) {
                    if (a.y < b.y) {
                        return -1;
                    }
                    if (a.y > b.y) {
                        return 1;
                    }
                }
                return 0;
            });
    }

    ngOnInit() {
        var res = {"grid":{"gridType":"fit","colWidth":0,"rowHeight":0,"margin":13},"components":[{"compId":"app_view2","compName":"绩效完成情况","isDisplay":1,"isMaxenable":0,"width":2,"height":1,"x":0,"y":0,"param":""},{"compId":"app_view5","compName":"资讯","isDisplay":1,"isMaxenable":1,"width":4,"height":3,"x":0,"y":1,"param":""},{"width":4,"height":3,"y":4,"x":0,"isDisplay":1,"compId":"app_view11","isMaxenable":0,"param":"","compName":"营销概览"},{"width":8,"height":3,"y":7,"x":0,"isDisplay":1,"compId":"app_view7","isMaxenable":0,"param":"","compName":"信息中心"},{"compId":"app_view9","compName":"待办事项","isDisplay":1,"isMaxenable":1,"width":3,"height":4,"x":0,"y":10,"param":""},{"compId":"app_view1","compName":"本月新增客户","isDisplay":1,"isMaxenable":0,"width":2,"height":1,"x":2,"y":0,"param":""},{"compId":"app_view10","compName":"日历","isDisplay":1,"isMaxenable":1,"width":5,"height":4,"x":3,"y":10,"param":""},{"compId":"app_view3","compName":"经营指标完成情况","isDisplay":1,"isMaxenable":0,"width":2,"height":1,"x":4,"y":0,"param":""},{"compId":"app_view6","compName":"客户概览","isDisplay":1,"isMaxenable":1,"width":4,"height":3,"x":4,"y":1,"param":""},{"width":2,"height":1,"y":4,"x":4,"isDisplay":1,"compId":"app_view12","isMaxenable":0,"param":"","compName":"正在执行营销活动数"},{"width":2,"height":1,"y":5,"x":4,"isDisplay":1,"compId":"app_view14","isMaxenable":0,"param":"","compName":"总客户数"},{"compId":"app_view4","compName":"营销活动完成情况","isDisplay":1,"isMaxenable":0,"width":2,"height":1,"x":6,"y":0,"param":""},{"width":2,"height":1,"y":4,"x":6,"isDisplay":1,"compId":"app_view13","isMaxenable":0,"param":"","compName":"营销活动覆盖客户数"},{"width":2,"height":1,"y":5,"x":6,"isDisplay":1,"compId":"app_view15","isMaxenable":0,"param":"","compName":"客户户均AUM"}]};

        var layout = sessionStorage.getItem('layout');
        if (!layout) {
          sessionStorage.setItem('layout', JSON.stringify(res));
        }

        Promise.resolve(null).then(() =>   this.notify['success']('你好！', '欢迎登录精准营销管理系统'));
        this.query('admin');
        const self = this;
        this.options = {
            gridType: 'fit',
            compactType: 'none', /*对齐类型*/
            itemChangeCallback: function (item, itemComponent) {
                // const echarts = document.getElementById(`${item.id}`);
                // if (echarts) {/*在gridster2 Change的时候出发echarts的resize方法*/
                //     echarts.style.width = itemComponent.width + 'px';
                //     echarts.style.height = itemComponent.height - 30 + 'px';
                // }
                if (itemComponent.item.id == 'app_view5') {
                    self.data5 = itemComponent.height - 130 + 'px';
                }
                if (itemComponent.item.id == 'app_view6') {
                    // self.data6 = itemComponent.height - 120 + 'px';
                    self.data6 =  itemComponent.height - 130 + 'px';
                }
                if (itemComponent.item.id == 'app_view7') {
                    self.data7 = itemComponent.height - 130 + 'px';
                }
                if (itemComponent.item.id == 'app_view8') {
                    self.data8 = itemComponent.height - 130 + 'px';
                }
            },
            itemResizeCallback: function (item, itemComponent) {
                if (itemComponent.item.id === 'app_view9') {
                    if (itemComponent.height > 0) {
                        self.heightData9  = itemComponent.height * 0.92 ;
                    }
                    if (itemComponent.width > 0) {
                        self.widthData9  = itemComponent.width * 0.9 ;
                    }

                }
                if (itemComponent.item.id === 'app_view10') {
                    self.heightData10  = itemComponent.height * 0.82 ;
                    self.widthData10  = itemComponent.width * 0.9 ;
                    // self.heightData101  = itemComponent.height * 0.82 ;
                    // self.widthData101  = itemComponent.width * 0.9 ;
                }
                // const chart = new G2.Chart({
                //     container: document.getElementById(`${item.id}`),
                //     forceFit: true,
                //     height: itemComponent.height-30
                // });
                // chart.forceFit()
                // const echarts = document.getElementById(`${item.id}`);
                // if (echarts) {/*在gridster2 resize的时候出发echarts的resize方法*/
                //     echarts.style.width = itemComponent.width + 'px';
                //     echarts.style.height = itemComponent.height - 30 + 'px';
                //     //     /*根据不同的模块 重置相应的图*/
                //     const a = {'demo1': self.echartsInstance1, 'demo2': self.echartsInstance2};
                //     a[item.id].resize();
                // }
            },
            margin: 13,
            outerMargin: true,
            minCols: 1,
            maxCols: 10,
            minRows: 1,
            maxRows: 15,
            maxItemCols: 15,
            minItemCols: 1,
            maxItemRows: 15,
            minItemRows: 1,
            defaultItemCols: 1,
            defaultItemRows: 1,
            fixedColWidth: 250,
            fixedRowHeight: 250,
            draggable: { /*是否可拖拽*/
                enabled: false,
                /*stop: AppComponent.eventStop*/
            },
            resizable: { /*是否可以缩放*/
                enabled: false,
                /*stop: AppComponent.eventStop*/
            },
            swap: true,
            displayGrid: 'onDrag&Resize' /*显示行和列的背景网格。选项：'永远' 缩放和拖拽时| 从不*/
        };
        // this.dashboard = [
        //     // {
        //     //     cols: 2,
        //     //     rows: 1,
        //     //     y: 0,
        //     //     x: 0,
        //     //     initCallback: ItemsComponent.itemInit,
        //     //     minItemCols: 1,
        //     //     maxItemCols: 100,
        //     //     maxItemRows: 100,
        //     //     minItemRows: 1,
        //     //     minItemArea: 1,
        //     //     maxItemArea: 2500,
        //     //     dragEnabled: true,
        //     //     resizeEnabled: true,
        //     //     compactEnabled: true
        //     // },
        //     {cols: 2, rows: 1, y: 0, x: 0, id: 'demo1', maxenable: false},
        //     {cols: 2, rows: 1, y: 0, x: 2, id: 'demo2', maxenable: false},
        //     {cols: 2, rows: 1, y: 0, x: 4, id: 'demo3', maxenable: false},
        //     {cols: 2, rows: 1, y: 0, x: 6, id: 'demo4', maxenable: false},
        //     {cols: 4, rows: 3, y: 1, x: 0, id: 'demo5', maxenable: true},
        //     {cols: 4, rows: 3, y: 1, x: 3, id: 'demo6', maxenable: true},
        //     {cols: 8, rows: 3, y: 4, x: 0, id: 'demo7', maxenable: true},
        //     {cols: 8, rows: 3, y: 7, x: 0, id: 'demo8', maxenable: true},
        //     {cols: 8, rows: 4, y: 10, x: 0, id: 'demo9', maxenable: false},
        // ];

    }

    ngAfterViewInit() {
        // let gridster = document.getElementById('gridster');
        // gridster.style.height = window.screen.height + 'px';

        const fullscreen = document.getElementById('fullscreen');
        fullscreen.style.display = 'none';
        fullscreen.style.width = (document.body.clientWidth - 250) + 'px';
        // fullscreen.style.height = (document.body.clientHeight-150)+'px';
        fullscreen.style.height = 650 + 'px';
    }

    changedOptions() {
        if (this.options.api && this.options.api.optionsChanged) {
            this.options.api.optionsChanged();
        }
    }

    /*初始化*/
    onChartInit(e: any, i: number) {
        if (i === 1) {
            this.echartsInstance1 = e;
        } else if (i === 2) {
            this.echartsInstance2 = e;
        }
    }

    removeItem(event?, item?) {
        this.dashboard.splice(this.dashboard.indexOf(item), 1);
    }
    zoomItem(event?, item?) {
        if (item) {
            /*ngSwitchCase 赋值 用来判断*/
            this.fullscreenIndex = item.id;

            let width = (document.body.clientWidth - 275);
            let height = (document.body.clientHeight - 150);
            if (item.id === 'app_view10') {
                this.heightData101 = height;
                this.widthData101 = width;
            }
            if (item.id === 'app_view9') {
                this.heightData91 = height;
                this.widthData91 = width;
            }
            const fullscreenEcharts = document.getElementById('fullscreenEcharts');
            /*根据屏幕宽度设置 放大后的echarts 宽高*/
            if (fullscreenEcharts) {
                fullscreenEcharts.style.width = (document.body.clientWidth - 275) + 'px';
                fullscreenEcharts.style.height = (document.body.clientHeight - 150) + 'px';
            }

        }
        const fullscreen = document.getElementById('fullscreen');
        const gridster = document.getElementById('gridster');
        if (this.fullscreen === 'fullscreen') {
            fullscreen.style.display = 'block';
            gridster.style.display = 'none';
            this.fullscreen = 'fullscreen_exit';
        } else {
            fullscreen.style.display = 'none';
            gridster.style.display = 'block';
            this.fullscreen = 'fullscreen';
        }
    }

    /*向上*/
    upWard() {
        // this.fullscreenIndex;
        // console.log(this.fullscreenIndex);
        let num = parseInt(this.fullscreenIndex.substr(this.fullscreenIndex.length - 1, 1));
        // console.log(typeof(num));
        if (num > 1) {
            num = num - 1;
        } else {
            num = 8;
        }

        this.fullscreenIndex = 'demo' + num;
        // console.log(this.fullscreenIndex.substr(this.fullscreenIndex.length-1,1));
        // console.log('upWard');
    }

    /*向下*/
    down() {
        let num = parseInt(this.fullscreenIndex.substr(this.fullscreenIndex.length - 1, 1));
        // console.log(typeof(num));
        if (num < 8) {
            num = num + 1;
        } else {
            num = 1;
        }

        this.fullscreenIndex = 'demo' + num;
        // console.log(this.fullscreenIndex.substr(this.fullscreenIndex.length-1,1));

        // console.log('down');
    }
}
