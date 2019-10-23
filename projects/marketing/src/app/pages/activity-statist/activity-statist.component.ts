import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-activity-statist',
  templateUrl: './activity-statist.component.html',
  styleUrls: ['./activity-statist.component.scss']
})
export class ActivityStatistComponent implements OnInit {
  public activityNum = {
    color: ['#00E5EE', '#00C5CD', '#00868B'],
    title: {
      text: '活动数量统计',
      subtext: '',
      x: 'right'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['延期的营销活动数量', '执行中的营销活动总数量', '待办审批营销工作的数量']
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: [
          { value: 70, name: '延期的营销活动数量' },
          { value: 89, name: '执行中的营销活动总数量' },
          { value: 30, name: '待办审批营销工作的数量' }
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }

  public institutNum = {
    color:['#87CEFF','	#7EC0EE','#6CA6CD'],
    legend: {},
    tooltip: {},
    dataset: {
        dimensions: ['product', '代办审批活动数量', '执行中活动数量', '延期活动数量'],
        source: [
            {product: '高新丈八北路支行', '代办审批活动数量': 35, '执行中活动数量': 78, '延期活动数量': 47},
            {product: '高新昆明路支行', '代办审批活动数量': 95, '执行中活动数量': 38, '延期活动数量': 14},
            {product: '雁塔区支行', '代办审批活动数量': 87, '执行中活动数量': 13, '延期活动数量': 54},

        ]
    },
    xAxis: {type: 'category'},
    yAxis: {},
    series: [
        {type: 'bar'},
        {type: 'bar'},
        {type: 'bar'}
    ]
};

public channelNum = {
  color:['#87CEFA','#00BFFF','#1E90FF'],
  legend: {},
  tooltip: {},
  dataset: {
      dimensions: ['product', '代办审批活动数量', '执行中活动数量', '延期活动数量'],
      source: [
          {product: '网银', '代办审批活动数量': 45, '执行中活动数量': 19, '延期活动数量': 67},
          {product: '柜面', '代办审批活动数量': 12, '执行中活动数量': 23, '延期活动数量': 43},
          {product: '微信', '代办审批活动数量': 9, '执行中活动数量': 53, '延期活动数量': 29},
          {product: 'APP', '代办审批活动数量': 6, '执行中活动数量': 15, '延期活动数量': 35},
      ]
  },
  xAxis: {type: 'category'},
  yAxis: {},
  series: [
      {type: 'bar'},
      {type: 'bar'},
      {type: 'bar'}
  ]
};
  public institutData = [
    {
      institutName: '高新丈八北路支行',
      institutDb: '35',
      institutZx: '78',
      institutYd: '47'
    },
    {
      institutName: '高新昆明路支行',
      institutDb: '95',
      institutZx: '38',
      institutYd: '14'
    }, {
      institutName: '雁塔区支行',
      institutDb: '87',
      institutZx: '13',
      institutYd: '54'
    }
  ]

  public channelData = [
    {
      channelName: '网银',
      channelDb: '45',
      channelZx: '19',
      channelYd: '67'
    },{
      channelName: '柜面',
      channelDb: '12',
      channelZx: '23',
      channelYd: '43'
    },{
      channelName: '微信',
      channelDb: '9',
      channelZx: '53',
      channelYd: '29'
    },{
      channelName: 'APP',
      channelDb: '6',
      channelZx: '15',
      channelYd: '36'
    }
  ]

  constructor() {}

  ngOnInit() {}
}
