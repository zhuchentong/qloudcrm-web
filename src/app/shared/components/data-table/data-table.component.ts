import { Component, OnInit, forwardRef, Input, TemplateRef, ViewChild, Output, EventEmitter } from '@angular/core'
import { QlTable } from 'qloud-angular/package/table/table'
import { toBase64String } from '@angular/compiler/src/output/source_map'
import { TableColumn, WidthItem } from 'qloud-angular/package/table/table.interface'
import { PageService } from '@app/core/http'

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  providers: [{ provide: QlTable, useExisting: forwardRef(() => DataTableComponent) }]
})
export class DataTableComponent implements OnInit {
  @Input() public model: any[] = []
  @Input() public height: number
  @Input() public page: PageService
  @Output('page-change') public pageChangeEvent: EventEmitter<any> = new EventEmitter()
  @ViewChild('table', { static: true }) public table: QlTable

  constructor() {
    // super()
  }

  public ngOnInit() {}

  // private updateColumns = this.table.updateColumns
  public updateColumns(column: TableColumn) {
    this.table.updateColumns(column)
  }

  public updateColumnsWidth(widthItem: WidthItem) {
    this.table.updateColumnsWidth(widthItem)
  }

  public transformColumnsData() {
    if (!this.table.model) {
      this.table.model = this.model || []
    }
    this.table.transformColumnsData()
  }

  public onPageChange(index) {
    this.page.pageIndex = index
    this.pageChangeEvent.emit(index)
  }
}
