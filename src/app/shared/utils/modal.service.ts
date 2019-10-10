import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef } from '@angular/core'
import { GecoDialog } from 'angular-dynamic-dialog'
import { ModalConfirmComponent } from '../components/modal-confirm/modal-confirm.component'
import { ModalContainerComponent } from '../components/modal-container/modal-container.component'
import { Observable, EMPTY } from 'rxjs'
import { map, tap, catchError } from 'rxjs/operators'
import { ModalPromptComponent } from '../components/modal-prompt/modal-prompt.component'
import { isUndefined } from 'util'

@Injectable()
export class ModalService {
  private _componentRef: any
  private _container: ModalContainerComponent

  constructor(private r: ComponentFactoryResolver, private appRef: ApplicationRef, private injector: Injector) {}

  private appendComponentToBody(component: any): any {
    const componentRef = this.r.resolveComponentFactory(component).create(this.injector)
    componentRef.changeDetectorRef.detectChanges()
    this.appRef.attachView(componentRef.hostView)
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement
    document.body.appendChild(domElem)
    return componentRef
  }

  /**
   * 确认消息
   * @param param 确认参数
   */
  public confirm({ message }) {
    return this.open({
      header: false,
      position: 'top',
      size: 'mini',
      component: ModalConfirmComponent,
      data: { message }
    })
  }

  public prompt({ title = '', message = '', placeholder = '' }) {
    return this.open({
      title,
      size: 'small',
      component: ModalPromptComponent,
      data: { message, placeholder }
    })
  }

  public open({ header = true, size = 'normal', title = '', position = '', component, data = {} }) {
    return this.createModal(component, data, {
      header,
      title,
      position,
      size
    }).pipe(
      map(x => {
        if (isUndefined(x)) throw new Error()
        else return x
      }),
      catchError(() => {
        return EMPTY
      })
    )
  }

  public createModal(compRef: any, data, config) {
    this._componentRef = this.appendComponentToBody(ModalContainerComponent)
    this._container = this._componentRef['_component']

    this._container.header = config.header
    this._container.position = config.position
    this._container.title = config.title
    this._container.size = config.size

    this._container.addContent(compRef, data)
    this._container.onClosedModal().subscribe(() => this.removeComponentModal())
    return this._container.onClosedModal()
  }

  private removeComponentModal(): any {
    this.appRef.detachView(this._componentRef.hostView)
    this._componentRef.destroy()
  }

  private _createInjector(config: any): Injector {
    const injectionTokens = new WeakMap()

    // added
    return injectionTokens
  }
}
