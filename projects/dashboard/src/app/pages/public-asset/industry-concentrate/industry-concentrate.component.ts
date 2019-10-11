import {Component, Input, OnInit, SimpleChanges, OnChanges} from '@angular/core';
import {QlNotificationService} from "qloud-angular/package/notification/notification.service";

@Component({
  selector: 'app-industry-concentrate',
  templateUrl: './industry-concentrate.component.html',
  styleUrls: ['./industry-concentrate.component.css']
})
export class IndustryConcentrateComponent implements OnInit {
    @Input()  hdata5: any; // 接收父组件charts的高度值
    index ='1';
    tabIndex = '1';
    oneNews: Array<Object> = [];
    twoNews: Array<Object> = [];
    threeNews: Array<Object> = [];

    loading = false;
    constructor( private notify: QlNotificationService) {
    }

    /*查询*/
    query() {
      this.oneNews.push({"id": 1, "content": "南充市税务局与四川天府银行加速推进社保电子缴费进程"});
      this.oneNews.push({"id": 2, "content": "2019年全球1000强银行排名出炉，四川天府银行上升至433名"});
      this.oneNews.push({"id": 3, "content": "成都市电子缴费正式上线 15个区域缴费人实现“零跑腿”"});
      this.oneNews.push({"id": 4, "content": "四川天府银行荣获“2018榜样中国•金融榜”两项大奖"});
      this.oneNews.push({"id": 5, "content": "四川天府银行绵阳分行开业"});
      this.oneNews.push({"id": 6, "content": "关于四川天府银行承兑业务收费标准的公示"});
      this.oneNews.push({"id": 7, "content": "四川天府银行服务收费目录（政府指导定价）"});
      this.oneNews.push({"id": 8, "content": "四川天府银行服务收费目录（市场调节价）"});
      this.oneNews.push({"id": 9, "content": "四川天府银行服务收费目录（免费项目）"});
      this.oneNews.push({"id": 10, "content": "四川天府银行2017年年终决算通告"});


      this.twoNews.push({"id": 1, "content": "鑫意约好友，京东'壕'礼到！"});
      this.twoNews.push({"id": 2, "content": "一生一世，有鑫有意"});
      this.twoNews.push({"id": 3, "content": "你好银行，'鑫意'来了"});
      this.twoNews.push({"id": 4, "content": "辞旧迎新，积分商场好礼重磅来袭！"});
      this.twoNews.push({"id": 5, "content": "猴年加'鑫'，重磅来袭，鑫薪卡福利全面升级"});
      this.twoNews.push({"id": 6, "content": "梅花卡玩转中国年"});
      this.twoNews.push({"id": 7, "content": "你好，银行抢小猴，duang到爆"});

      this.threeNews.push({"id": 1, "content": "银保监局频开大额罚单 4家银行被罚1265万"});
      this.threeNews.push({"id": 2, "content": "中小银行股权频转让 多途径补充资本"});
      this.threeNews.push({"id": 3, "content": "PayPal入华：支付市场的新一轮竞合"});
      this.threeNews.push({"id": 4, "content": "银保监会发布银保机构侵害消费者权益乱象整治"});
      this.threeNews.push({"id": 5, "content": "2019年9月邮政储蓄银行小微企业运行指数报告"});
      this.threeNews.push({"id": 6, "content": "厦门银行收缩网贷存管业务"});
      this.threeNews.push({"id": 7, "content": "长沙银行不良连年攀升 一级资本低于行业平均"});
      this.threeNews.push({"id": 8, "content": "济南农商行拟定增募资不超14.29亿元 拨备率远"});
      this.threeNews.push({"id": 9, "content": "银行理财收益下行年金补位 代销保险成创收重要手段"});
      this.threeNews.push({"id": 10, "content": "银行对金融科技人才求贤若渴 理财子公司广撒英雄帖"});
    }

    handle(index: string): void {
      this.tabIndex = index;
    }

    ngOnInit() {
        this.query();
    }
}
