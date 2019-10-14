import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import { ClipboardService } from 'ngx-clipboard'
import { QlMessageService } from 'qloud-angular'

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {
  @ViewChild('json', { static: true }) jsonElement?: ElementRef

  public collpse = true
  public form: Object = {
    components: []
  }

  public json: string = ''

  onChange(event) {
    this.json = JSON.stringify(event.form, null, 4)
  }

  constructor(private clipboardService: ClipboardService, private message: QlMessageService) {}

  ngOnInit() {}

  onCollpse() {
    this.collpse = !this.collpse
  }

  onCopy() {
    if (this.clipboardService.copyFromContent(this.json)) {
      this.message.success('复制成功')
    } else {
      this.message.error('复制失败')
    }
  }
}
