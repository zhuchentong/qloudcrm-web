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
  @Input() border = false
  @Input() borderWidth = '1px'
  @Input() borderColor = '#e6ebf5'

  constructor() {}

  ngOnInit() {}

  public get containerStyle() {
    return {
      'border-top': this.border ? `solid ${this.borderWidth} ${this.borderColor}` : 'none',
      'border-left': this.border ? `solid ${this.borderWidth} ${this.borderColor}` : 'none'
    }
  }
}
