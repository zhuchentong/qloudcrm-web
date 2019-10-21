import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-combo-list',
  templateUrl: './combo-list.component.html',
  styleUrls: ['./combo-list.component.scss']
})
export class ComboListComponent implements OnInit {
  public comboList: any[] = []

  constructor() {}

  ngOnInit() {}
}
