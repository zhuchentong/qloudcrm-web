import {
  Component,
  OnInit,
  Input,
  TemplateRef,
  ViewEncapsulation,
  forwardRef,
  Output,
  EventEmitter,
  ViewChild,
  ViewContainerRef,
  AfterContentInit,
  AfterViewInit,
  ContentChildren,
  QueryList,
  Renderer2,
  ElementRef
} from '@angular/core'
import { FormGroup, FormBuilder } from '@angular/forms'
import { QlForm } from 'qloud-angular/package/form/form'
@Component({
  selector: 'data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss'],
  providers: [{ provide: QlForm, useExisting: forwardRef(() => DataFormComponent) }]
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class DataFormComponent implements OnInit, AfterViewInit {
  @Input() public formGroup: FormGroup = this.fb.group({})
  @Input() public button: TemplateRef<void>
  @Input() public action: TemplateRef<void>
  @Input() public showSubmit: boolean = true
  @Input() public showReset: boolean = true
  @Input() public submitText = '查询'
  @Input('show-icon') showIcon: boolean = false
  @Input('show-message') showMessage: boolean = false
  @Input('inline-message') inlineMessage: boolean = false
  @Input('size') size: string
  // right / left / top
  @Input('label-position') labelPosition: string = 'right'
  @Input('label-width') labelWidth: string = '100px'
  @Input('label-suffix') labelSuffix: string

  @Output() public submit = new EventEmitter<any>()
  @ViewChild('form', { static: true }) public form: TemplateRef<QlForm>

  @ViewChild('content', { static: true }) public content: ElementRef<any>
  public inline: boolean = true
  public collapse = true
  public collapseEnable = false
  private collapseItemList = []
  constructor(private fb: FormBuilder, private renderer: Renderer2) {}
  private itemWidth = 330
  ngOnInit() {}

  ngAfterViewInit() {
    this.updateCollapseEnable()
    this.collapseEnable = !!this.collapseItemList.length

    if (this.collapseEnable) {
      this.onCollapseChange(true)
    }
    // this.renderer.setStyle(this.demoDiv.nativeElement, 'background-color', 'red')
  }

  onCollapseChange(collapse) {
    this.collapse = collapse
    this.collapseItemList.forEach(item => {
      this.renderer.setStyle(item, 'display', this.collapse ? 'none' : 'inline')
    })
  }

  updateCollapseEnable() {
    const displayCount = Math.floor(this.content.nativeElement.offsetWidth / this.itemWidth)
    this.content.nativeElement.children.forEach((item, index) => {
      if (index >= displayCount) {
        this.collapseItemList.push(item)
      }
    })
  }

  public onSubmit() {
    if (this.formGroup.valid) {
      this.submit.emit('submit')
    }
  }

  public onReset() {
    this.formGroup.reset()
  }
}
