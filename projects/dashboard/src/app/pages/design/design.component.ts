import {Component, EventEmitter, OnInit} from '@angular/core';
import {GridsterConfig, GridsterItem} from 'angular-gridster2';
import {formDesign, formLayout, formSave} from './design';
import {QlNotificationService} from "qloud-angular/package/notification/notification.service";
@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {
    ComponentId = '';
    data5 = '400px';
    data6 = '400px';
    data7 = '400px';
    data8 = '400px';
    heightData9: any;
    widthData9: any;
    heightData10: any;
    widthData10: any;
    public options: GridsterConfig;
    public dashboard: Array<GridsterItem>;
    fullscreen = 'fullscreen';
    fullscreenIndex = '';
    public echartsInstance1: any;
    public echartsInstance2: any;
    ComponentList = [
      {
        "value": "app_view1",
        "label": "本月新增客户",
        "code": "layoutCompType"
      },
      {
        "value": "app_view10",
        "label": "日历",
        "code": "layoutCompType"
      },
      {
        "value": "app_view2",
        "label": "绩效完成情况",
        "code": "layoutCompType"
      },
      {
        "value": "app_view3",
        "label": "经营指标完成情况",
        "code": "layoutCompType"
      },
      {
        "value": "app_view4",
        "label": "营销活动完成情况",
        "code": "layoutCompType"
      },
      {
        "value": "app_view5",
        "label": "资讯",
        "code": "layoutCompType"
      },
      {
        "value": "app_view6",
        "label": "客户概览",
        "code": "layoutCompType"
      },
      {
        "value": "app_view7",
        "label": "信息中心",
        "code": "layoutCompType"
      },
      // {
      //   "value": "app_view8",
      //   "label": "收益类型净值变动",
      //   "code": "layoutCompType"
      // },
      {
        "value": "app_view9",
        "label": "待办事项",
        "code": "layoutCompType"
      },
      {
        "value": "app_view11",
        "label": "营销概览",
        "code": "layoutCompType"
      }
      ,
      {
        "value": "app_view12",
        "label": "正在执行营销活动数",
        "code": "layoutCompType"
      },
      {
        "value": "app_view13",
        "label": "营销活动覆盖客户数",
        "code": "layoutCompType"
      },
      {
        "value": "app_view14",
        "label": "总客户数",
        "code": "layoutCompType"
      },
      {
        "value": "app_view15",
        "label": "客户户均AUM",
        "code": "layoutCompType"
      }
    ];
    layoutCompType = this.ComponentList;

    state = false;
    title = '';
    refreshForm: EventEmitter<any>;
    refreshForm2: EventEmitter<any>;
    refreshForm3: EventEmitter<any>;
    form = {components: []}; // formio的初始化json
    form2 = {components: []}; // formio的初始化json
    form3 = {components: []}; // formio的初始化json
    formData = {data: {}}; // formio提交的数据
    formData2 = {data: {}}; // formio提交的数据
    maxenableList = [];
    UserId = '';
    attrDialog = false;
    attrDialog2 = false;
    attrDialog3 = false;
    updataParam = {
        'grid': {
            'gridType': 'fit',
            'colWidth': 0,
            'rowHeight': 0,
            'margin': 13
        },
        'components': [
        ]
    };
    constructor( private notify: QlNotificationService) {
    }
    /*查询*/
    query(id) {
          var res: object = JSON.parse(sessionStorage.getItem('layout'));


           this.dashboard = res['components'];
            let data: any;
            data = JSON.stringify(this.dashboard).replace(/isDisplay/g, 'display');
            data = data.replace(/height/g, 'rows');
            data = data.replace(/width/g, 'cols');
            data = data.replace(/compId/g, 'id');
            data = data.replace(/isMaxenable/g, 'maxenable');
            this.dashboard =  JSON.parse(data);
            // this.dashboard = JSON.parse(JSON.stringify(this.dashboard).replace(/isDisplay/g, 'display'));
            // this.dashboard = JSON.parse(JSON.stringify(this.dashboard).replace(/height/g, 'rows'));
            // this.dashboard = JSON.parse(JSON.stringify(this.dashboard).replace(/width/g, 'cols'));
            // this.dashboard = JSON.parse(JSON.stringify(this.dashboard).replace(/compId/g, 'id'));
            // this.dashboard = JSON.parse(JSON.stringify(this.dashboard).replace(/isMaxenable/g, 'maxenable'));
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
    /*编辑*/
    edit(param) {
      // console.log(JSON.stringify(param));
      sessionStorage.setItem('layout', JSON.stringify(param));
      this.attrDialog3 = false;
      this.notify['success']('保存首页布局信息成功');
    }

    ngOnInit() {
        this.query('admin');
        this.refreshForm = new EventEmitter();
        this.refreshForm2 = new EventEmitter();
        this.refreshForm3 = new EventEmitter();
        this.form = formDesign;
        this.form2 = formLayout;
        this.form3 = formSave;
        const self = this;
        this.options = {
            gridType: 'fit',
            compactType: 'none', /*对齐类型*/
            getNextPossiblePosition: 'true',
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
                if (itemComponent.item.id === 'app_view9') {
                    self.heightData9  = itemComponent.height * 0.92 ;
                    self.widthData9  = itemComponent.width * 0.9 ;
                }
                if (itemComponent.item.id === 'app_view10') {
                    self.heightData10  = itemComponent.height * 0.82 ;
                    self.widthData10  = itemComponent.width * 0.92 ;
                }
            },
            margin: 13,
            outerMargin: true,
            minCols: 1,
            maxCols: 100,
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
                enabled: true,
                /*stop: AppComponent.eventStop*/
            },
            resizable: { /*是否可以缩放*/
                enabled: true,
                /*stop: AppComponent.eventStop*/
            },
            swap: true,
            displayGrid: 'onDrag&Resize' /*显示行和列的背景网格。选项：'永远' 缩放和拖拽时| 从不*/
        };
        this.maxenableList = [{'value': 'true', 'label': '是'},
            {'value': 'false', 'label': '否'}];
        // this.layoutCompType = JSON.parse(sessionStorage.getItem('allList'))['layoutCompType'];
        // this.ComponentList = this.layoutCompType;
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
        // for (let i = 0; i < this.ComponentList.length; i++) {
        //     for (let j = 0; j < this.dashboard.length; j++) {
        //         if (this.dashboard[j]['id'] == this.ComponentList[i]['value']) {
        //             this.ComponentList.splice(i, 1);
        //         }
        //     }
        // }
        // this.selectComponent = [];
        this.dashboard.splice(this.dashboard.indexOf(item), 1);
    }

    change() {
        this.state = !this.state;
    }
    zoomItem(event?, item?) {
        if (item) {
            /*ngSwitchCase 赋值 用来判断*/
            this.fullscreenIndex = item.id;
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
        let num = parseInt(this.fullscreenIndex.substr(this.fullscreenIndex.length - 1, 1));
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
        // console.log(this.fullscreenIndex);
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
    // 打开新增组件模态框
    open() {
        const result = [];
        for (let i = 0; i <  this.ComponentList.length; i++) {
            const obj =  this.ComponentList[i];
            const num = obj.value;
            // console.log(JSON.stringify(obj));
            let flag = false;
            for (let j = 0; j < this.dashboard.length; j++) {
                const aj = this.dashboard[j];
                const n = aj.id;
                if (n == num) {
                    flag = true;
                    break;
                }
            }
            if (!flag) {
                result.push(obj);
            }
        }
        // console.log(result);
        this.refreshForm.emit({
            form: this.form,
        });

        this.form.components[0]['columns'][0]['components'][0]['data']['values'] = result;
        this.form.components[0]['columns'][1]['components'][0]['data']['values'] = this.maxenableList;
        // this.large.show();
        this.attrDialog = true;
    }

    onSubmit($event) {
        for (let j = 0; j < this.dashboard.length; j++) {
            if (this.dashboard[j].id == this.formData.data['componentId']) {
                return;
            }
        }
        if (this.formData.data['componentId'] != '') {
            this.dashboard.push({
                cols: 1,
                rows: 1,
                y: 0,
                x: 0,
                display: 1,
                id: this.formData.data['componentId'],
                maxenable: this.formData.data['maxenable'] == 'true' ? 1 : 0
            });
           this.cancel();
        }

    }
    open2() {
        this.refreshForm3.emit({
            form: this.form3,
        });
        this.attrDialog3 = true;
    }

    // save() {
    //     // console.log('------*******************')
    //     // let json = JSON.parse(JSON.stringify(this.dashboard).replace(/id/g, 'compId'));
    //     // json = JSON.parse(JSON.stringify(json).replace(/cols/g, 'width'));
    //     // json = JSON.parse(JSON.stringify(json).replace(/rows/g, 'height'));
    //     // json = JSON.parse(JSON.stringify(json).replace(/maxenable/g, 'isMaxenable'));
    //     // json = JSON.parse(JSON.stringify(json).replace(/display/g, 'isDisplay'));
    //     let json: any;
    //     json = JSON.stringify(this.dashboard).replace(/id/g, 'compId');
    //     json = json.replace(/cols/g, 'width');
    //     json = json.replace(/rows/g, 'height');
    //     json = json.replace(/maxenable/g, 'isMaxenable');
    //     json = json.replace(/display/g, 'isDisplay');
    //     json = JSON.parse(json);
    //     for (let i = 0; i < json.length; i++) {
    //         json[i]['param'] = '';
    //         for (let j = 0; j < JSON.parse(sessionStorage.getItem('allList'))['layoutCompType'].length; j++) {
    //             if (json[i].compId ==  JSON.parse(sessionStorage.getItem('allList'))['layoutCompType'][j].value) {
    //                 json[i]['compName']  = JSON.parse(sessionStorage.getItem('allList'))['layoutCompType'][j].label;
    //             }
    //         }
    //     }
    //     this.updataParam['components'] = json;
    //     this.edit(this.updataParam);
    // }
    // 模态框展示组件布局信息
    showLayout(event?, item?) {
        this.refreshForm.emit({
            form: this.form2,
        });
        for (let j = 0; j < this.ComponentList.length; j++) {
            if (item.id == this.ComponentList[j].value) {
                this.title = this.ComponentList[j].label;
            }
        }
        this.formData2.data['width'] = item.cols;
        this.formData2.data['height'] = item.rows;
        this.formData2.data['x'] = item.x;
        this.formData2.data['y'] = item.y;
        if (item.maxenable == 0) {
            this.formData2.data['maxenable'] = '否';
        }
        if (item.maxenable == 1) {
            this.formData2.data['maxenable'] = '是';
        }
        // this.formData2.data['maxenable'] = item.maxenable;
        // this.large2.show();
        this.attrDialog2 = true;
    }
    cancel() {
        this.formData.data['componentId'] = '';
        this.formData.data['maxenable'] = '';
        this.attrDialog = false;
    }
    cancel2(){
        this.attrDialog3 = false
    }
    onSubmit2(){
        let json: any;
        json = JSON.stringify(this.dashboard).replace(/id/g, 'compId');
        json = json.replace(/cols/g, 'width');
        json = json.replace(/rows/g, 'height');
        json = json.replace(/maxenable/g, 'isMaxenable');
        json = json.replace(/display/g, 'isDisplay');
        json = JSON.parse(json);
        for (let i = 0; i < json.length; i++) {
            json[i]['param'] = '';
            for (let j = 0; j < this.layoutCompType.length; j++) {
                if (json[i].compId ==  this.layoutCompType[j].value) {
                    json[i]['compName']  = this.layoutCompType[j].label;
                }
            }
        }
        this.updataParam['components'] = json;
        this.edit(this.updataParam);
    }
}
