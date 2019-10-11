import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-level',
  templateUrl: './customer-level.component.html',
  styleUrls: ['./customer-level.component.css']
})
export class CustomerLevelComponent implements OnInit {

  public seltimes = [
    {value:'近一个月',label:'近一个月'},
    {value:'近三个月',label:'近三个月'},
    {value:'近六个月',label:'近六个月'},
    {value:'近一年',label:'最近一年'}
  ]

  public customerlevels = [
    {'code':'2YTD67','name':'王志业','nowlevel':'金卡客户','beforelevel':'普通客户','sex':'男','age':'26','tel':'18746577832','aum':'0.6万','zcye':'39万','nljbd':'25万','cpsl':'2','khsj':'2017-12-04'},
    {'code':'Y78D67','name':'陈美丽','nowlevel':'金卡客户','beforelevel':'白金客户','sex':'女','age':'35','tel':'15678973212','aum':'0.6万','zcye':'52万','nljbd':'45万','cpsl':'3','khsj':'2015-09-31'},
    {'code':'12ND67','name':'陈平','nowlevel':'白金客户','beforelevel':'潜在客户','sex':'男','age':'31','tel':'18234569202','aum':'0.6万','zcye':'100万','nljbd':'132万','cpsl':'2','khsj':'2017-10-09'},
    {'code':'GY78W1','name':'王袁伟','nowlevel':'潜在客户','beforelevel':'金卡客户','sex':'男','age':'49','tel':'15332985576','aum':'0.6万','zcye':'201万','nljbd':'108万','cpsl':'4','khsj':'2016-04-01'}
  ]

  public customerType =[{'ctnum':'212','ctup':'32','ctdown':'54','ctwealth':'19','ctbank':'9','ctplatinum':'6','ctgold':'11','ctpotential':'45','ctordinary':'107'}] 

  constructor() { }

  ngOnInit() {
  }

}
