import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {QlNotificationService} from "qloud-angular/package/notification/notification.service";

@Component({
  selector: 'app-invest-type',
  templateUrl: './invest-type.component.html',
  styleUrls: ['./invest-type.component.css']
})
export class InvestTypeComponent implements OnInit {
    @Input()  hdata7: any; // 接收父组件charts的高度值
    @Input() type  = 'success';
    @Output() output = new EventEmitter();

    index ='1';
    tabIndex = '1';
    oneIndex = '1';

  // 指标名称、单位、余额、日增量/发生额、日/年排名
    factors = [
      {"factorName": '储蓄存款-时点', "unit": '万元', "amount": 11000, "dayAmount": 11000, "rank": 1},
      {"factorName": '保本理财-保有量', "unit": '万元', "amount": 3200, "dayAmount": 2100, "rank": 2},
      {"factorName": '非保本理财-销量', "unit": '万元', "amount": 110, "dayAmount": 100, "rank": 3}
    ];

  // 产品信息   产品名称、 产品详情、利率、上架时间、下架时间
    products = [
      {"productNo": "C1010319000160",
        "productName": "”金钥匙·汇利丰”2019年第11期",
        "content": "”金钥匙·汇利丰”2019年第11期人民币结构性存款产品（高净值客户专享）",
        "price": 1.0984,
        "startDate": "2019-08-01",
        "endDate": "2019-12-31"},
      {"productNo": "C1010318002601",
        "productName": "“金钥匙·安心得利·灵珑”2019年第5期",
        "content": "”金钥匙·安心得利·灵珑”2019年第5期封闭净值型人民币理财产品（周四掌银专享）",
        "price": 10,
        "startDate": "2019-09-01",
        "endDate": "2020-01-31"},
      {"productNo": "C1010518011891",
        "productName": "”乾元-私行尊享G”2019年第2期",
        "content": "“乾元-私行尊享G”2019年第2期人民币理财产品",
        "price": 10,
        "startDate": "2019-10-01",
        "endDate": "2020-01-31"}
      ];

  // 营销活动名称 、  覆盖人数、  起始时间、 结束时间、  业务部门 业务目标、营销渠道（网点、APP、呼叫中心、短信、微信）

  campaigns = [
    {
      "targetName": "十一消费满500减50活动",
      "amount": '38%',  // 完成率
      "count": 20,   // 参与客户数
      "aum": '￥15,000.00',  // AUM
      "familyAUM": '2019-10-01', // 开始时间
      "dayChangeAmount": '2019-10-07',  // 结束时间
      "yearChangeAmount": '￥800,000.00',
      "deptName": '零售部',
      "target": '促进用户使用本行卡进行消费',
      "channel": 'APP'
    },
    {
      "targetName": "年底小额贷款发放活动",
      "amount": '40%',
      "count": 10,
      "aum": '￥150,000.00',
      "familyAUM": '2019-12-20',
      "dayChangeAmount": '2020-01-20',
      "yearChangeAmount": '￥4,800,000.00',    // 年累计资产变动
      "deptName": '贷款部',
      "target": '促进年底贷款额度达标',
      "channel": '网点'
    },
    {
      "targetName": "梅花卡玩转中国年",
      "amount": '50%',  // 资产余额
      "count": 80,   // 数量
      "aum": '￥55,000.00',  // AUM
      "familyAUM": '2019-01-01', // 户AUM
      "dayChangeAmount": '2019-12-31',  //上日资产变动
      "yearChangeAmount": '￥1,800,000.00',    // 年累计资产变动
      "deptName": '信用卡中心',
      "target": '促进客户使用梅花卡消费',
      "channel": '短信'
    },
    {
      "targetName": "鑫易贷产品旺季活动营销通知",
      "amount": '80%',  // 资产余额
      "count": 43,   // 数量
      "aum": '￥35,000.00',  // AUM
      "familyAUM": '2019-09-01', // 户AUM
      "dayChangeAmount": '2019-12-31',  //上日资产变动
      "yearChangeAmount": '￥3,200,000',    // 年累计资产变动
      "deptName": '零售部',
      "target": '促进客户购买鑫易贷产品',
      "channel": '短信'
    }
  ];

    res = {
    "list": [
      {
        "customerNo": "CN000001",
        "customerName": "李三",
        "level": '金卡客户',
        "sex": '男',
        "age": 29,
        "phone": '13500000000',
        "aum": '30,350.00',
        "amount": '120,247.00',
        "dayAmount": '8,000.00',
        "yearAmount": '105,000.00'
      },
      {
        "customerNo": "CN000002",
        "customerName": "王五",
        "level": '普卡客户',
        "sex": '男',
        "age": 40,
        "phone": '13809090909',
        "aum": '12,350.00',
        "amount": '22,000.00',
        "dayAmount": '6,000.00',
        "yearAmount": '55,000.00'
      },
      {
        "customerNo": "CN000004",
        "customerName": "艾小平",
        "level": '白金卡客户',
        "sex": '男',
        "age": 29,
        "phone": '13412345678',
        "aum": '32,098.00',
        "amount": '43,000.00',
        "dayAmount": '4,000.00',
        "yearAmount": '25,100.00'
      },
      {
        "customerNo": "CN000005",
        "customerName": "李磊",
        "level": '金卡客户',
        "sex": '男',
        "age": 29,
        "phone": '13412345678',
        "aum": '62,350.00',
        "amount": '92,247.00',
        "dayAmount": '6,000.00',
        "yearAmount": '55,000.00'
      },
      {
        "customerNo": "CN000006",
        "customerName": "韩梅",
        "level": '金卡客户',
        "sex": '女',
        "age": 32,
        "phone": '15012344321',
        "aum": '12,763.00',
        "amount": '22,650.00',
        "dayAmount": '3,500.00',
        "yearAmount": '25,000.00'
      }
    ],
      "undo": [
        {
          "customerNo": "CN000010",
          "customerName": "刘能",
          "level": '潜力客户',
          "sex": '男',
          "age": 25,
          "phone": '13500000000',
          "aum": '30,350.00',
          "amount": '120,247.00',
          "dayAmount": '8,000.00',
          "yearAmount": '105,000.00'
        },
        {
          "customerNo": "CN000011",
          "customerName": "王小庆",
          "level": '潜力客户',
          "sex": '男',
          "age": 40,
          "phone": '13809090909',
          "aum": '12,350.00',
          "amount": '22,000.00',
          "dayAmount": '6,000.00',
          "yearAmount": '55,000.00'
        },
        {
          "customerNo": "CN000013",
          "customerName": "王宝宝",
          "level": '潜力客户',
          "sex": '男',
          "age": 30,
          "phone": '13412345678',
          "aum": '32,098.00',
          "amount": '43,000.00',
          "dayAmount": '4,000.00',
          "yearAmount": '25,100.00'
        }
      ],
      "assign": [
        {
          "customerNo": "CN000101",
          "customerName": "李向阳",
          "level": '普卡客户',
          "sex": '男',
          "age": 25,
          "phone": '13500000000',
          "aum": '30,350.00',
          "amount": '120,247.00',
          "dayAmount": '8,000.00',
          "yearAmount": '105,000.00',
          "assignDate": '2019-10-01',
          "channel": '分派',
          "clerkName": '李经理'
        },
        {
          "customerNo": "CN0000102",
          "customerName": "王阿大",
          "level": '金卡客户',
          "sex": '男',
          "age": 40,
          "phone": '13809090909',
          "aum": '12,350.00',
          "amount": '22,000.00',
          "dayAmount": '6,000.00',
          "yearAmount": '55,000.00',
          "assignDate": '2019-10-02',
          "channel": '分派',
          "clerkName": '王经理'
        },
        {
          "customerNo": "CN000103",
          "customerName": "张山",
          "level": '金卡客户',
          "sex": '男',
          "age": 30,
          "phone": '13412345678',
          "aum": '32,098.00',
          "amount": '43,000.00',
          "dayAmount": '4,000.00',
          "yearAmount": '25,100.00',
          "assignDate": '2019-10-10',
          "channel": '分派',
          "clerkName": '王经理'
        }
      ],
      "campaign": [
        {
          "customerNo": "CN000201",
          "customerName": "杨一",
          "level": '普卡客户',
          "sex": '男',
          "age": 25,
          "phone": '13500000000',
          "aum": '30,350.00',
          "amount": '120,247.00',
          "dayAmount": '8,000.00',
          "yearAmount": '105,000.00',
          "campaignName": '十一消费满500减50活动',
          "campaignDate": '2019-10-01',
          "clerkName": '李经理'
        },
        {
          "customerNo": "CN0000202",
          "customerName": "陈晨",
          "level": '金卡客户',
          "sex": '男',
          "age": 40,
          "phone": '13809090909',
          "aum": '22,350.00',
          "amount": '12,000.00',
          "dayAmount": '16,000.00',
          "yearAmount": '55,000.00',
          "campaignDate": '2019-10-02',
          "campaignName": '十一消费满500减50活动',
          "clerkName": '王经理'
        },
        {
          "customerNo": "CN000203",
          "customerName": "胡山",
          "level": '金卡客户',
          "sex": '男',
          "age": 30,
          "phone": '13412345678',
          "aum": '32,098.00',
          "amount": '3,000.00',
          "dayAmount": '4,000.00',
          "yearAmount": '25,100.00',
          "campaignDate": '2019-10-10',
          "campaignName": '十一消费满500减50活动',
          "clerkName": '王经理'
        }
      ],
      "amount": [
        {
          "customerNo": "CN000301",
          "customerName": "吴书",
          "level": '普卡客户',
          "sex": '男',
          "age": 25,
          "phone": '13500000000',
          "aum": '30,350.00',
          "amount": '120,247.00',
          "dayAmount": '8,000.00',
          "yearAmount": '105,000.00'
        },
        {
          "customerNo": "CN0000302",
          "customerName": "姚元",
          "level": '金卡客户',
          "sex": '男',
          "age": 40,
          "phone": '13809090909',
          "aum": '22,350.00',
          "amount": '12,000.00',
          "dayAmount": '16,000.00',
          "yearAmount": '55,000.00'
        },
        {
          "customerNo": "CN000303",
          "customerName": "汤元",
          "level": '金卡客户',
          "sex": '男',
          "age": 30,
          "phone": '13412345678',
          "aum": '32,098.00',
          "amount": '3,000.00',
          "dayAmount": '4,000.00',
          "yearAmount": '25,100.00'
        }
      ]
  };

    constructor(private notify: QlNotificationService) {
    }

    /*查询*/
    query() {
      // 客户号、客户名称、客户等级、性别、年龄、手机号、AUM、资产余额、上日资产变动、年累计资产变动

      // this.loadEchartTimeout(res);
    }

    handle(index: string): void {
      this.tabIndex = index;
    }
    oneHandle(index: string): void {
      this.oneIndex = index;
    }


    ngOnInit() {
        this.query();

    }
}
