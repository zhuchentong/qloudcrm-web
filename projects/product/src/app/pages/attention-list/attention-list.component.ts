import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-attention-list',
  templateUrl: './attention-list.component.html',
  styleUrls: ['./attention-list.component.scss']
})
export class AttentionListComponent implements OnInit {
  public attentionList: any[] = []

  constructor() {}

  ngOnInit() {}
}
