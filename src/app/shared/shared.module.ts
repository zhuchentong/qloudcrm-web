import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { QlModule } from 'qloud-angular'
import { BrowserModule } from '@angular/platform-browser'

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations'
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
import { FormioModule } from 'angular-formio'
import { DividerComponent } from './components/divider/divider.component'
import { PageContainerComponent } from './components/page-container/page-container.component'
import { EchartService } from './utils/echart.service'
import { ClipboardModule } from 'ngx-clipboard'
import { TabItemComponent } from './components/tab-item/tab-item.component'
import { TabContainerComponent } from './components/tab-container/tab-container.component'
import { CardHeaderComponent } from './components/card-header/card-header.component'

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
  PageContainerComponent,
  TabItemComponent,
  TabContainerComponent,
  CardHeaderComponent
]
const DIRECTIVES = [NavigateDirective]
const PIPES = [DictPipe]
const THIRDS = []
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GecoDialogModule,
    ConfirmationPopoverModule.forRoot(),
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    QlModule.forRoot(),
    FormioModule,
    ClipboardModule,
    PdfViewerModule
  ],
  providers: [
    EchartService,
    ModalService,
    ModalRef
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
    PdfViewerModule,
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES
  ]
})
export class SharedModule {}
