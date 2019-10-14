import {
  Component,
  OnInit,
  ViewContainerRef,
  ViewChild,
  ComponentRef,
  ComponentFactoryResolver,
  ChangeDetectorRef,
  Injector,
  Input,
  TemplateRef
} from '@angular/core'
import { Subject, Observable } from 'rxjs'

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.scss']
})
export class ModalContainerComponent implements OnInit {
  @Input() public title = ''
  @Input() public header = true
  @Input() public position: '' | 'top' | 'bottom' = ''
  @Input() public size: 'mini' | 'small' | 'normal' | 'large' | 'huge' = 'normal'
  @ViewChild('container', { read: ViewContainerRef, static: true })
  private modalContent: ViewContainerRef
  private subjectOpen: any = new Subject<any>()
  private subjectClose: any = new Subject<any>()
  private refDynamicContent: ComponentRef<any>
  public content: TemplateRef<any>
  close: boolean = false
  show: boolean = true

  public get bodyClass() {
    return {
      'position-top': this.position === 'top',
      'position-bottom': this.position === 'bottom',
      [`modal-size-${this.size}`]: true
    }
  }

  constructor(private r: ComponentFactoryResolver, private cdRef: ChangeDetectorRef, private _injector: Injector) {}

  ngOnInit(): void {}

  addContent(compRef: any, config: any = null): void {
    if (compRef instanceof TemplateRef) {
      this.content = compRef
    } else {
      const factory = this.r.resolveComponentFactory(compRef)
      this.refDynamicContent = this.modalContent.createComponent(factory)

      if (config) {
        Object.entries(config).forEach(([key, value]) => {
          this.refDynamicContent.instance[key] = value
        })
      }
    }

    this.openDialog()
  }

  /**
   * 打开dialog
   */
  private openDialog(): void {
    this.subjectOpen.next()
    this.subjectOpen.complete()
  }

  /**
   * 关闭dialog
   * @param result
   */
  public closeDialog(result?: any): void {
    this.modalContent.clear()
    this.show = false
    setTimeout(() => {
      this.close = true
      this.subjectClose.next(result)
      this.subjectClose.complete()
    }, 200)
  }

  onClosedModal(): Observable<any> {
    return this.subjectClose.asObservable()
  }

  onOpenModal(): Observable<any> {
    return this.subjectOpen.asObservable()
  }
}
