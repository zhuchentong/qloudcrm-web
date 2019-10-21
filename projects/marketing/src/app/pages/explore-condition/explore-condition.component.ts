import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-explore-condition',
  templateUrl: './explore-condition.component.html',
  styleUrls: ['./explore-condition.component.scss']
})
export class ExploreConditionComponent implements OnInit {
  public customerTag = [
    {
      name: '中年',
      code: '101',
      type: 'tag',
      frequency: 866,
      count: 7264,
      description: '测试',
      createTime: '2019-10-10 11:22',
      state: '上架',
      parent: 8
    }
  ]

  constructor() {}

  ngOnInit() {}
}
