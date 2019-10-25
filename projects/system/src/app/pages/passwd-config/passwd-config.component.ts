import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, FormControl, AbstractControl } from '@angular/forms'

@Component({
  selector: 'app-passwd-config',
  templateUrl: './passwd-config.component.html',
  styleUrls: ['./passwd-config.component.scss']
})
export class PasswdConfigComponent implements OnInit {
  validateForm: FormGroup
  constructor(private formBuilder: FormBuilder) {}

  submit(): void {
    console.log(this.validateForm.value)
  }

  reset(): void {
    this.validateForm.reset()
  }

  statusCtrl(item: string): string {
    if (!this.validateForm.controls[item]) return
    const control: AbstractControl = this.validateForm.controls[item]
    return control.dirty && control.hasError('status') ? control.errors.status : ''
  }

  messageCtrl(item: string): string {
    if (!this.validateForm.controls[item]) return
    const control: AbstractControl = this.validateForm.controls[item]
    return control.dirty && control.hasError('message') ? control.errors.message : ''
  }

  ngOnInit(): void {
    this.validateForm = this.formBuilder.group({
      oldPassword: ['', [this.passwordValidator]],
      newPassword: ['', [this.passwordValidator]],
      confirmPassword: ['', [this.passwordValidator]]
    })
  }

  private passwordValidator = (control: FormControl): any => {
    if (!control.value) {
      return { status: 'error', message: '密码是必填的' }
    }
    if (control.value.length < 6) {
      return { status: 'error', message: '密码长度必须大于 6 位' }
    }

    return { status: 'success' }
  }
}
