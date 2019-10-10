import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'label-container',
  templateUrl: './label-container.component.html',
  styleUrls: ['./label-container.component.scss']
})
export class LabelContainerComponent implements OnInit {
  @Input() column = 2
  @Input() labelWidth = 100
  @Input() labelPosition = 'right'
  @Input() contentPosition = 'left'
  constructor() {}

  ngOnInit() {}
}
