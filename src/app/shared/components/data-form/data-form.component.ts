import {
  Component,
  OnInit,
  Input,
  TemplateRef,
  ViewEncapsulation,
  forwardRef,
  Output,
  EventEmitter,
  ViewChild
} from '@angular/core'
import { FormGroup, FormBuilder } from '@angular/forms'
import { QlForm } from 'qloud-angular/package/form/form'
import { QlFormProps } from 'qloud-angular/package/form/form.props'
@Component({
  selector: 'data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss'],
  providers: [{ provide: QlForm, useExisting: forwardRef(() => DataFormComponent) }]
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class DataFormComponent implements OnInit {
  @Input() public formGroup: FormGroup = this.fb.group({})
  @Input() public collapse: TemplateRef<void>
  @Input() public button: TemplateRef<void>
  @Input() public action: TemplateRef<void>
  @Input() public showSubmit: boolean = true
  @Input() public showReset: boolean = true
  @Input() public submitText = '查询'
  @Output() public submit = new EventEmitter<any>()
  @ViewChild('form', { static: true }) public form: TemplateRef<QlForm>
  public isCollapse = true

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  public onSubmit() {
    if (this.formGroup.valid) {
      this.submit.emit('submit')
    }
  }

  public onReset() {
    this.formGroup.reset()
  }
}
