import { Component, OnInit, ViewChild } from '@angular/core';
import { CheckBoxComponent } from '@syncfusion/ej2-angular-buttons';
import {
  AutoComplete, ChangeEventArgs, DropDownListComponent
} from '@syncfusion/ej2-angular-dropdowns';
import {
  AccordionComponent
} from '@syncfusion/ej2-angular-navigations';
import {
  Column, EditSettingsModel, TreeGridComponent
} from '@syncfusion/ej2-angular-treegrid';
import {
  ActionEventArgs,
  QueryCellInfoEventArgs,
  SortEventArgs
} from '@syncfusion/ej2-grids';
import { AccordionClickArgs, ExpandEventArgs } from '@syncfusion/ej2-navigations';
import { sortData } from '../../../jsontreegriddata';
@Component({
  selector: 'app-grid-demo',
  templateUrl: './grid-demo.component.html',
  providers: [
  ],
  styleUrls: ['./grid-demo.component.css'],
})
export class GridDemoComponent implements OnInit {
  title = 'tree-grid';
  public data: Object[] = [];

  /* ===== Start for sorting ===== */
  public sortSettings: any;

  @ViewChild('treegrid')
  public treegrid: TreeGridComponent;
  @ViewChild('orderName')
  public orderName: CheckBoxComponent;
  @ViewChild('category')
  public category: CheckBoxComponent;
  @ViewChild('orderDate')
  public orderDate: CheckBoxComponent;
  @ViewChild('units')
  public units: CheckBoxComponent;
  @ViewChild('price')
  public price: CheckBoxComponent;
  constructor() {}
  /* ===== End for sorting ===== */

  /* =====Start for filter ===== */
  public pageSettings: Object;
  public filterSettings: Object;
  public d1data: Object;
  public ddlfields: Object;
  public d2data: Object;
  public typefields: Object;

  @ViewChild('dropdown1')
  public dropdown1: DropDownListComponent;
  @ViewChild('dropdown2')
  public dropdown2: DropDownListComponent;
  /* ===== End for filter ===== */

  /* ===== Start for selection  ===== */
  public selectionSettings: Object;
  public selectd1data: Object;
  public fields1: Object;
  public selectd2data: Object;
  public fields2: Object;
  public selectd3data: Object;
  public fields3: Object;
  @ViewChild('selectdropdown1')
  public selectdropdown1: DropDownListComponent;

  @ViewChild('selectdropdown2')
  public selectdropdown2: DropDownListComponent;

  @ViewChild('selectdropdown3')
  public selectdropdown3: DropDownListComponent;
  /* ===== End for selection ===== */

  /* ===== Start for edit row  ===== */
  public editSettings: Object;
  public toolbar: Object;
  public validationRules: Object;
  public edit: Object;
  public ordernamerules: Object;
  public categorynamerules: Object;
  public unitrules: Object;

  public numericParams: Object;
  public orderidrules: Object;
  public startdaterules: Object;
  public dpParams: Object;
  public autoCompleteObj: AutoComplete;
  /* ===== End for edit row  ===== */

  /* ===== Start for Context menu (list of actions appears when a cell, header, or the pager is right-clicked)  ===== */
  public contextMenuItems: string[] = [];
  public editing: EditSettingsModel;
  public editparams: Object;
  /* ===== End for Context menu  ===== */

  /* ===== Start for reorder column  ===== */
  public reorderd1data: Object;
  public reorderddlfields: Object;
  public reorderd2data: Object;
  public reorderfields: Object;
  @ViewChild('reorderdropdown1')
  public reorderdropdown1: DropDownListComponent;
  @ViewChild('reorderdropdown2')
  public reorderdropdown2: DropDownListComponent;
  /* ===== End for reorder column  ===== */

  /* ===== Start for Cell Alignment  ===== */

  public cellalignd1data: Object;
  public cellalignddlfields: Object;
  public cellalignd2data: Object;
  public cellalignfields: Object;
  @ViewChild('cellaligndropdown1')
  public cellaligndropdown1: DropDownListComponent;
  @ViewChild('cellaligndropdown2')
  public cellaligndropdown2: DropDownListComponent;

  /* ===== End for Cell Alignment  ===== */

  /* ===== Start for Accordion  ===== */

  @ViewChild('element') acrdnInstance: AccordionComponent;
  public clickEle: HTMLElement;
  public clicked(e: AccordionClickArgs) {
    this.clickEle = (e.originalEvent.target as Element).closest(
      '.e-acrdn-header'
    );
  }

  /* ===== End for Accordion  ===== */

  ngOnInit(): void {
    this.data = sortData;
    // for sort
    this.sortSettings = {
      columns: [
        { field: 'Category', direction: 'Ascending' },
        { field: 'orderName', direction: 'Ascending' },
      ],
    };

    // for filtering
    this.pageSettings = { pageSize: 10, pageSizes: true };
    this.filterSettings = { type: 'Menu', hierarchyMode: 'Parent' };
    this.ddlfields = { text: 'mode', value: 'id' };
    this.typefields = { text: 'mode', value: 'id' };
    this.d1data = [
      { id: 'Parent', mode: 'Parent' },
      { id: 'Child', mode: 'Child' },
      { id: 'Both', mode: 'Both' },
      { id: 'None', mode: 'None' },
    ];
    this.d2data = [
      { id: 'Menu', mode: 'Menu' },
      { id: 'Excel', mode: 'Excel' },
    ];

    // for selection
    this.selectionSettings = { type: 'Multiple' };
    this.fields1 = { text: 'type', value: 'id' };
    (this.selectd1data = [
      { id: 'Single', type: 'Single' },
      { id: 'Multiple', type: 'Multiple' },
    ]),
      (this.fields2 = { text: 'mode', value: 'id' });
    (this.selectd2data = [
      { id: 'Row', mode: 'Row' },
      { id: 'Cell', mode: 'Cell' },
    ]),
      (this.fields3 = { text: 'mode', value: 'id' });
    this.selectd3data = [
      { id: 'Flow', mode: 'Flow' },
      { id: 'Box', mode: 'Box' },
    ];

    // for edit row
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      mode: 'Row',
    };
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    this.validationRules = { minLength: 0 };
    this.edit = { params: { format: 'n' } };

    this.ordernamerules = { required: true };
    this.categorynamerules = { required: true };
    this.unitrules = { number: true, min: 0 };
    this.numericParams = { params: { format: 'n' } };
    this.startdaterules = { date: true };

    this.orderidrules = { required: true, number: true };
    this.dpParams = {
      create: () => {
        let elem: HTMLInputElement = document.createElement('input');
        elem.id = 'orderName';
        return elem;
      },
      read: () => {
        return this.autoCompleteObj.value;
      },
      destroy: () => {
        this.autoCompleteObj.destroy();
      },
      write: (args: {
        rowData: Object;
        column: Column;
        element: HTMLElement;
      }) => {
        this.autoCompleteObj = new AutoComplete({
          dataSource: <{ key: string; value: any }[]>(
            this.treegrid.grid.dataSource
          ),
          fields: { value: 'orderName' },
          value: args.rowData[args.column.field],
        });
        this.autoCompleteObj.appendTo(args.element);
      },
    };
    // for context Menu
    this.contextMenuItems = [
      'AutoFit',
      'AutoFitAll',
      'SortAscending',
      'SortDescending',
      'Edit',
      'Delete',
      'Save',
      'Cancel',
      'PdfExport',
      'ExcelExport',
      'CsvExport',
      'FirstPage',
      'PrevPage',
      'LastPage',
      'NextPage',
    ];
    this.editing = { allowDeleting: true, allowEditing: true, mode: 'Row' };
    this.editparams = { params: { format: 'n' } };

    // for reorder column
    this.reorderddlfields = { text: 'name', value: 'id' };
    (this.reorderd1data = [
      { id: 'orderID', name: 'Order ID' },
      { id: 'orderName', name: 'Order Name' },
      { id: 'Category', name: 'Category' },
      { id: 'orderDate', name: 'Order Date' },
      { id: 'units', name: 'Units' },
    ]),
      (this.reorderd2data = [
        { id: '0', name: '1' },
        { id: '1', name: '2' },
        { id: '2', name: '3' },
        { id: '3', name: '4' },
        { id: '4', name: '5' },
      ]),
      (this.reorderfields = { text: 'name', value: 'id' });

    // for Cell alignment
    this.cellalignddlfields = { text: 'name', value: 'id' };
    (this.cellalignd1data = [
      { id: 'orderID', name: 'Order ID' },
      { id: 'Category', name: 'Category' },
      { id: 'orderDate', name: 'Order Date' },
      { id: 'units', name: 'Units' },
    ]),
      (this.cellalignd2data = [
        { id: 'Right', name: 'Right' },
        { id: 'Left', name: 'Left' },
        { id: 'Center', name: 'Center' },
        { id: 'Justify', name: 'Justify' },
      ]),
      (this.cellalignfields = { text: 'name', value: 'id' });
  }

  /* ===== Start for sort ===== */
  public onClick1(e: MouseEvent): void {
    if (this.orderName.checked) {
      this.treegrid.sortByColumn('orderName', 'Ascending', true);
    } else {
      this.treegrid.grid.removeSortColumn('orderName');
    }
  }
  public onClick2(e: MouseEvent): void {
    if (this.category.checked) {
      this.treegrid.sortByColumn('Category', 'Ascending', true);
    } else {
      this.treegrid.grid.removeSortColumn('Category');
    }
  }
  public onClick3(e: MouseEvent): void {
    if (this.orderDate.checked) {
      this.treegrid.sortByColumn('orderDate', 'Ascending', true);
    } else {
      this.treegrid.grid.removeSortColumn('orderDate');
    }
  }
  public onClick4(e: MouseEvent): void {
    if (this.units.checked) {
      this.treegrid.sortByColumn('units', 'Ascending', true);
    } else {
      this.treegrid.grid.removeSortColumn('units');
    }
  }

  public sort(args: SortEventArgs): void {
    if (args.requestType === 'sorting') {
      for (let columns of this.treegrid.getColumns()) {
        for (let sortcolumns of this.treegrid.sortSettings.columns) {
          if (sortcolumns.field === columns.field) {
            this.check(sortcolumns.field, true);
            break;
          } else {
            this.check(columns.field, false);
          }
        }
      }
    }
  }

  public check(field: string, state: boolean): void {
    switch (field) {
      case 'orderName':
        this.orderName.checked = state;
        break;
      case 'Category':
        this.category.checked = state;
        break;
      case 'orderDate':
        this.orderDate.checked = state;
        break;
      case 'units':
        this.units.checked = state;
        break;
      case 'price':
        this.price.checked = state;
        break;
    }
  }
  /* ===== End for sort ===== */

  /* ===== Start for filter ===== */
  onChange(e: ChangeEventArgs): void {
    let mode: any = <string>e.value;
    this.treegrid.filterSettings.hierarchyMode = mode;
    this.treegrid.clearFiltering();
  }
  change(e: ChangeEventArgs): void {
    let type: any = <string>e.value;
    this.treegrid.filterSettings.type = type;
    this.treegrid.clearFiltering();
  }
  /* ===== End for filter ===== */

  /* ===== Start for selection ===== */
  change1(e: ChangeEventArgs): void {
    let type: any = <string>e.value;
    let mode: any = <string>this.selectdropdown2.value;
    this.treegrid.selectionSettings.type = type;
    if (type === 'Multiple' && mode === 'Cell') {
      document.getElementById('cellselection').style.display = 'table-row';
    } else {
      document.getElementById('cellselection').style.display = 'none';
    }
  }
  change2(e: ChangeEventArgs): void {
    let mode: any = e.value;
    let type: any = <string>this.selectdropdown1.value;
    this.treegrid.selectionSettings.mode = mode;
    if (type === 'Multiple' && mode === 'Cell') {
      document.getElementById('cellselection').style.display = 'table-row';
    } else {
      document.getElementById('cellselection').style.display = 'none';
    }
  }
  change3(e: ChangeEventArgs): void {
    let cellmode: any = <string>e.value;
    this.treegrid.selectionSettings.cellSelectionMode = cellmode;
  }
  /* ===== End for selection  ===== */

  /* ===== Start for reorder column  ===== */
  public onColumnReorderChange(e: ChangeEventArgs): void {
    let columnName: string = <string>e.value;
    let index: number = this.treegrid.getColumnIndexByField(columnName);
    this.reorderdropdown2.value = index.toString();
  }
  public columnReorderchange(e: ChangeEventArgs): void {
    let columnName: string = <string>this.reorderdropdown1.value;
    let toColumnIndex: number = <number>e.value;
    this.treegrid.reorderColumns(
      columnName,
      (<Column>this.treegrid.columns[toColumnIndex]).field
    );
  }
  public actionComplete(args: ActionEventArgs): void {
    if (args.requestType === 'reorder') {
      let columnName: string = <string>this.reorderdropdown1.value;
      let index: number = this.treegrid.getColumnIndexByField(columnName);
      this.reorderdropdown2.value = index.toString();
    }
  }
  /* ===== End for reorder column  ===== */

  /* ===== Start for column color  ===== */
  queryCellInfo(args: QueryCellInfoEventArgs) {
    if (args.column.field === 'units') {
      args.cell.setAttribute('style', 'background-color:#efd3d345;color:#000;');
    }
    //  else {
    //   args.cell.setAttribute('style', 'background-color:#a0807b;color:white;');
    // }
  }

  /* ===== End for column color  ===== */

  /* ===== Start for Cell Alignment  ===== */
  public cellalignOnChange(e: ChangeEventArgs): void {
    let columnName: string = <string>e.value;
    let alignment: any = this.treegrid.getColumnByField(columnName).textAlign;
    this.cellaligndropdown2.value = alignment;
  }
  public cellalignChange(e: ChangeEventArgs): void {
    let alignment: any = e.value;
    let columnName: string = <string>this.cellaligndropdown1.value;
    this.treegrid.getColumnByField(columnName).textAlign = alignment;
    this.treegrid.refreshColumns();
  }
  /* ===== End for Cell Alignment  ===== */

  enableDisableGrid() {
    if (
      this.treegrid &&
      this.treegrid.element.classList.contains('disabletreegrid')
    ) {
      this.treegrid.element.classList.remove('disabletreegrid');
      (
        document.getElementById('TreeGridParent') as HTMLElement
      ).classList.remove('wrapper');
    } else if (this.treegrid) {
      this.treegrid.element.classList.add('disabletreegrid');
      (document.getElementById('TreeGridParent') as HTMLElement).classList.add(
        'wrapper'
      );
    }
  }

  public beforeExpand(e: ExpandEventArgs): void {
    let expandCount: number = this.acrdnInstance.element.querySelectorAll(
      '.e-selected'
    ).length;
    let ele: Element = this.acrdnInstance.element.querySelectorAll(
      '.e-selected'
    )[0];
    if (ele) {
      ele = ele.firstChild as Element;
    }
    if (expandCount === 1 && ele === this.clickEle) {
      e.cancel = true;
    }
  }
}
