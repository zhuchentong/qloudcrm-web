import { Component, OnInit, Input, TemplateRef, ViewChild, ElementRef } from '@angular/core'
import { Location } from '@angular/common'

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
  providers: [Location]
})
export class PageHeaderComponent implements OnInit {
  public _title: string
  public _titleVal: string = ''
  public _titleTpl: TemplateRef<void>

  @ViewChild('conTpl', { static: false })
  private conTpl: ElementRef

  @Input()
  public set title(value: string | TemplateRef<void>) {
    if (value instanceof TemplateRef) {
      this._title = null
      this._titleTpl = value
      this._titleVal = ''
    } else {
      this._title = value
      this._titleVal = this._title
    }
  }

  @Input() public breadcrumb: TemplateRef<void>
  @Input() public action: TemplateRef<void>
  @Input() public content: TemplateRef<void>
  @Input() public extra: TemplateRef<void>
  @Input() public back = false
  @Input('action-group') public actionGroup = false

  constructor(public location: Location) {}

  ngOnInit() {}

  public checkContent() {
    // if (isEmpty(this.conTpl.nativeElement)) {
    //   this.renderer.setAttribute(this.conTpl.nativeElement, 'hidden', '')
    // } else {
    //   this.renderer.removeAttribute(this.conTpl.nativeElement, 'hidden')
    // }
  }
}
