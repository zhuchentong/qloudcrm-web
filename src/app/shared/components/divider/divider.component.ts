import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss']
})
export class DividerComponent implements OnInit {
  @Input() text
  @Input() position: 'left' | 'right' | 'center' = 'center'
  @Input() dash = false
  constructor() {}

  ngOnInit() {}

  public get dividerStyle() {
    return { 'border-top': `${this.dash ? 'dashed' : 'solid'} 1px #e5e5e5` }
  }

  public get dividerLeftStyle() {
    return Object.assign(
      this.dividerStyle,
      this.position === 'left'
        ? {
            'flex-basis': '20px'
          }
        : {
            flex: 1
          }
    )
  }

  public get dividerRightStyle() {
    return Object.assign(
      this.dividerStyle,
      this.position === 'right'
        ? {
            'flex-basis': '20px'
          }
        : {
            flex: 1
          }
    )
  }
}
