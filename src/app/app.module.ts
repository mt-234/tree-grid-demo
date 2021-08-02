import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
  ButtonAllModule,
  CheckBoxAllModule
} from '@syncfusion/ej2-angular-buttons';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { SparklineAllModule } from '@syncfusion/ej2-angular-charts';
import {
  DropDownListAllModule,
  MultiSelectAllModule
} from '@syncfusion/ej2-angular-dropdowns';
import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';
import {
  AccordionModule,
  ToolbarModule
} from '@syncfusion/ej2-angular-navigations';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import {
  AggregateService,
  ContextMenuService,
  EditService,
  ExcelExportService,
  PageService,
  PdfExportService,
  ResizeService,
  RowDDService,
  SortService,
  TreeGridAllModule,
  TreeGridModule
} from '@syncfusion/ej2-angular-treegrid';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridDemoComponent } from './table';
import { DragDropComponent } from './table/drag-drop/drag-drop.component';

@NgModule({
  declarations: [AppComponent, GridDemoComponent, DragDropComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TreeGridModule,
    TreeGridAllModule,
    NumericTextBoxAllModule,
    ToolbarModule,
    DropDownListAllModule,
    ButtonAllModule,
    DialogModule,
    MultiSelectAllModule,
    CheckBoxAllModule,
    ReactiveFormsModule,
    FormsModule,
    DatePickerModule,
    SparklineAllModule,
    AccordionModule,
  ],
  providers: [
    AggregateService,
    PageService,
    SortService,
    ResizeService,
    EditService,
    ExcelExportService,
    PdfExportService,
    ContextMenuService,
    RowDDService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
