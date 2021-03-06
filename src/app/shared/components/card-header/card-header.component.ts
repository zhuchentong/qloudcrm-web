import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.scss']
})
export class CardHeaderComponent implements OnInit {
  @Input() title: string

  constructor() {}

  ngOnInit() {}
}
