import {
  Component,
  OnInit,
  forwardRef,
  Input,
  TemplateRef,
  ViewChild,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges
} from '@angular/core'
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
export class DataTableComponent implements OnInit, OnChanges {
  @Input() public model: any[] = []
  @Input() public height: number
  @Input() public page: PageService
  @Input() public selection: boolean
  @Input() public showIndex: boolean = true
  @Input() public action: TemplateRef<void>
  @Output('page-change') public pageChangeEvent: EventEmitter<any> = new EventEmitter()
  @Output('selection-change') public checkChangeEvent: EventEmitter<any> = new EventEmitter()
  @ViewChild('table', { static: true }) public table: QlTable

  public selectionList = new Set()

  private skipColumnWidthUpdate = false

  public customColumnList = {
    __index__: this.addIndexColumn,
    __selection__: this.addSelectionColumn
  }

  public source = []

  public ngOnChanges(changes: SimpleChanges) {
    if ('model' in changes) {
      this.source = this.model.map(x => Object.assign({}, x))
    }
  }

  constructor() {
    // super()
  }

  public ngOnInit() {}

  public updateColumns(column: TableColumn) {
    const target = Object.entries(this.customColumnList).find(([key]) => key === column.modelKey)

    if (target) {
      this.skipColumnWidthUpdate = true
      const [key, generaor] = target
      generaor.bind(this)(column)
    } else {
      this.table.updateColumns(column)
    }
  }

  public updateColumnsWidth(widthItem: WidthItem) {
    if (this.skipColumnWidthUpdate) {
      this.skipColumnWidthUpdate = false
      return
    }

    this.table.updateColumnsWidth(widthItem)
  }

  private addIndexColumn(column) {
    const table = this.table as any
    // 重置数据
    table.columnsWithLevel = []
    table.columns.forEach(x => (x.index += 1))
    table.columns.splice(0, 0, Object.assign(column, { index: 0 }))
    table.columnsWidth.splice(0, 0, { auto: false, width: 60 })

    table.transformColumnsData()
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

  public transformColumnsData() {
    if (!this.table.model) {
      this.table.model = this.source || []
    }
    this.table.transformColumnsData()
  }

  public toggleSelection() {
    const value = this.selectionList.size < this.table.model.length

    if (this.table.model) {
      this.table.model.forEach((x, index) => {
        x.__selection__ = value
        this.onCheckChange(value, { index })
      })

      this.table.transformModelData()
    }
  }

  public onPageChange(index) {
    this.page.pageIndex = index
    this.pageChangeEvent.emit(index)
  }

  public getSelections() {
    return Array.from(this.selectionList)
  }

  public onCheckChange(value, { index }) {
    const data = this.model[index]

    if (value) {
      this.selectionList.add(data)
    } else {
      this.selectionList.delete(data)
    }
    this.checkChangeEvent.emit(this.selectionList)
  }
}
