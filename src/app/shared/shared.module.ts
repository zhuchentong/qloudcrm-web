import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { QlModule } from 'qloud-angular'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { PageHeaderComponent } from './components/page-header/page-header.component'
import { DataFormComponent } from './components/data-form/data-form.component'
import { DataTableComponent } from './components/data-table/data-table.component'
import { ConfirmationPopoverModule } from 'angular-confirmation-popover'
import { GecoDialogModule } from 'angular-dynamic-dialog'
import { ModalConfirmComponent } from './components/modal-confirm/modal-confirm.component'
import { ModalService } from './utils/modal.service'
import { ModalContainerComponent } from './components/modal-container/modal-container.component'
import { ModalRef } from './utils'
import { ModalPromptComponent } from './components/modal-prompt/modal-prompt.component'
import { LabelContainerComponent } from './components/label-container/label-container.component'
import { LabelItemComponent } from './components/label-item/label-item.component'
import { DictPipe } from './pipes/dict.pipe'
import { NavigateDirective } from './directives/navigate.directive'
import { FormBuilderComponent, FormioComponent, FormioModule, FormioAppConfig } from 'angular-formio'
import { DividerComponent } from './components/divider/divider.component'
import { PageContainerComponent } from './components/page-container/page-container.component'
import { EchartService } from './utils/echart.service'
import { ClipboardModule } from 'ngx-clipboard'

const COMPONENTS = [
  ModalContainerComponent,
  PageHeaderComponent,
  DataFormComponent,
  DataTableComponent,
  ModalConfirmComponent,
  ModalPromptComponent,
  LabelContainerComponent,
  LabelItemComponent,
  DividerComponent,
  PageContainerComponent
]
const DIRECTIVES = [NavigateDirective]
const PIPES = [DictPipe]
@NgModule({
  imports: [
    GecoDialogModule,
    ConfirmationPopoverModule.forRoot(),
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    QlModule.forRoot(),
    FormioModule,
    ClipboardModule
  ],
  providers: [
    EchartService,
    ModalService,
    ModalRef,
    // {
    //   provide: FormioAppConfig,
    //   useValue: {
    //     // appUrl: 'https://example.form.io',
    //     // apiUrl: 'https://api.form.io',
    //     icons: 'fontawesome'
    //   }
    // }
  ],
  entryComponents: [...COMPONENTS],
  declarations: [...COMPONENTS, ...DIRECTIVES, ...PIPES],
  exports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule,
    QlModule,
    FormioModule,
    ClipboardModule,
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES
  ]
})
export class SharedModule {}
