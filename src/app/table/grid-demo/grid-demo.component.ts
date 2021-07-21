import { Component, OnInit, ViewChild } from '@angular/core';
import { CheckBoxComponent } from '@syncfusion/ej2-angular-buttons';
import { DropDownListComponent, ChangeEventArgs } from '@syncfusion/ej2-angular-dropdowns';
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
  /* Start for sorting*/

  /*start for filter*/
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
    this.pageSettings = { pageSize: 10 };
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
}
