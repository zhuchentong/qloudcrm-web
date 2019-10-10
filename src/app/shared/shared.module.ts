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

const COMPONENTS = [
  ModalContainerComponent,
  PageHeaderComponent,
  DataFormComponent,
  DataTableComponent,
  ModalConfirmComponent,
  ModalPromptComponent,
  LabelContainerComponent,
  LabelItemComponent
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
    QlModule.forRoot()
  ],
  entryComponents: [...COMPONENTS],
  declarations: [...COMPONENTS, ...DIRECTIVES, ...PIPES, NavigateDirective],
  exports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule,
    QlModule,
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES
  ]
})
export class SharedModule {}
