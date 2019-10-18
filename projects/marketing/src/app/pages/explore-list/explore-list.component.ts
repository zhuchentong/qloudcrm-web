import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore-list',
  templateUrl: './explore-list.component.html',
  styleUrls: ['./explore-list.component.scss']
})
export class ExploreListComponent implements OnInit {

  public exportListData = [
    {
      "name":"精英客户",
      "time":"20小时",
      'createTime':'2018-12-32',
      'status':'成功',
      'count':'187643'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
