import { Component, OnInit, ViewChild } from '@angular/core';
import { CheckBoxComponent } from '@syncfusion/ej2-angular-buttons';
import {
  DropDownListComponent,
  ChangeEventArgs,
} from '@syncfusion/ej2-angular-dropdowns';
import {
  PageService,
  SortService,
  TreeGridComponent,
} from '@syncfusion/ej2-angular-treegrid';
import { SortEventArgs } from '@syncfusion/ej2-grids';
import { sampleData, sortData } from '../../../jsontreegriddata';

@Component({
  selector: 'app-grid-demo',
  templateUrl: './grid-demo.component.html',
  providers: [PageService, SortService],
  styleUrls: ['./grid-demo.component.css'],
})
export class GridDemoComponent implements OnInit {
  title = 'tree-grid';
  public data: Object[] = [];

  /* Start for sorting*/
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
  /* End for sorting*/

  /*Start for filter*/
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
  /* End for filter*/

  /* Start for selection */
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
  /* End for selection*/


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
  }

  /* Start for sort*/
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
  /* End for sort*/

  /* Start for filter*/
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
  /* End for filter*/

  /* Start for selection*/
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
   /* End for selection*/
}
