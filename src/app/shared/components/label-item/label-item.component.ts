import { Component, OnInit, Input, HostBinding, Optional, Host, ViewChild, ElementRef } from '@angular/core'
import { LabelContainerComponent } from '../label-container/label-container.component'

@Component({
  selector: 'label-item',
  templateUrl: './label-item.component.html',
  styleUrls: ['./label-item.component.scss']
})
export class LabelItemComponent implements OnInit {
  @ViewChild('content', { static: true }) private content: ElementRef
  @Input()
  label = ''
  @Input() column = 1
  @Input() offset = 0

  constructor(@Host() @Optional() private parent: LabelContainerComponent) {
    if (parent == null) {
      throw new Error(`[label-item] must include 'label-container' component`)
    }
  }

  @HostBinding('class') classes: string

  ngOnInit() {
    this.classes = `col-span-${(this.column / this.parent.column) * 12}`
  }

  get contentClass() {
    return {
      default: this.content.nativeElement.childNodes.length <= 0
    }
  }

  get contentStyle() {
    return {
      textAlign: this.parent.contentPosition
    }
  }

  get labelStyle() {
    return {
      minWidth: `${this.parent.labelWidth}px`,
      textAlign: this.parent.labelPosition
    }
  }
}
