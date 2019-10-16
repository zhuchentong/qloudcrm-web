import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { QlMessageService } from 'qloud-angular'

@Component({
  selector: 'app-tag-search',
  templateUrl: './tag-search.component.html',
  styleUrls: ['./tag-search.component.scss']
})
export class TagSearchComponent implements OnInit {
  constructor(private router: Router, private message: QlMessageService) {}

  ngOnInit() {}

  onSubmit() {
    this.router.navigate(['/customer/customer-tag'], { replaceUrl: true })
    this.message.success('共查询到5个标签')
  }
}
