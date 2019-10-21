import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-approval-detail',
  templateUrl: './approval-detail.component.html',
  styleUrls: ['./approval-detail.component.scss']
})
export class ApprovalDetailComponent implements OnInit {
  public markerRequest = [
    {
      role:'辅管户',
      name:'张大山',
      customerNum: '67',
      assets:'1000万',
      hjassets:'80万',
      liability:'1200万',
      hjliability:'100万'
    }
  ]

  constructor() {}

  ngOnInit() {}
}
