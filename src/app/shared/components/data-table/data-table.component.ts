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
  @Input() public selection: boolean
  @Input() public action: TemplateRef<void>
  @Output('page-change') public pageChangeEvent: EventEmitter<any> = new EventEmitter()
  @ViewChild('table', { static: true }) public table: QlTable

  private skipColumnWidthUpdate = false

  constructor() {
    // super()
  }

  public ngOnInit() {}

  public updateColumns(column: TableColumn) {
    if (this.selection && column.modelKey === '__selection__') {
      this.addSelectionColumn(column)
      return
    }

    this.table.updateColumns(column)
  }

  private addSelectionColumn(column) {
    this.skipColumnWidthUpdate = true
    const table = this.table as any
    // 重置数据
    table.columnsWithLevel = []
    table.columns.forEach(x => (x.index += 1))
    table.columns.splice(0, 0, Object.assign(column, { index: 0 }))
    table.columnsWidth.splice(0, 0, { auto: false, width: 60 })
    this.table.model.forEach(x => (x.__selection__ = false))

    table.transformColumnsData()
  }

  public updateColumnsWidth(widthItem: WidthItem) {
    if (this.selection && this.skipColumnWidthUpdate) {
      this.skipColumnWidthUpdate = false
      return
    }

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
