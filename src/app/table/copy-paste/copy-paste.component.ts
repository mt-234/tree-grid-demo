import { Component, OnInit, ViewChild } from '@angular/core';
import { ContextMenuClickEventArgs, ContextMenuOpenEventArgs, ContextMenuService, EditService, GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { ContextMenuItemModel } from '@syncfusion/ej2-grids';
import { editingData } from '../../../data';

@Component({
  selector: 'app-copy-paste',
  templateUrl: './copy-paste.component.html',
  styleUrls: ['./copy-paste.component.css'],
  providers: [ContextMenuService, EditService],
})
export class CopyPasteComponent implements OnInit {
  public copiedRecord: any;
  public editingData: object[];
  public taskSettings: object;
  public editSettings: object;
  public contextMenuItems: (string | ContextMenuItemModel)[];
  @ViewChild('customcontextmenu', { static: true })
  public ganttObj: GanttComponent;
  constructor() {}

  ngOnInit(): void {
    this.editingData = editingData;
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks',
    };
    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
    };
    this.contextMenuItems = [
      {
        text: 'Copy',
        target: '.e-content',
        id: 'copy',
      } as ContextMenuItemModel,
      {
        text: 'Paste',
        target: '.e-content',
        id: 'paste',
      } as ContextMenuItemModel,
    ];
  }

  public contextMenuClick(args: ContextMenuClickEventArgs) {
    if (args.item.id === 'copy') {
      this.copiedRecord = args.rowData;
      this.copiedRecord.taskData.TaskID =
        this.ganttObj.currentViewData.length + 1;
    }
    if (args.item.id === 'paste') {
      this.ganttObj.addRecord(
        this.copiedRecord.taskData,
        'Below',
        args.rowData.index
      );
      if (this.copiedRecord.hasChildRecords) {
        this.addChildRecords(this.copiedRecord, args.rowData.index + 1);
      }
      this.copiedRecord = undefined;
    }
  }
  contextMenuOpen(args: ContextMenuOpenEventArgs) {
    if (args.type !== 'Header') {
      if (this.copiedRecord) {
        args.hideItems.push('Copy');
      } else {
        args.hideItems.push('Paste');
      }
    }
  }
  addChildRecords(record, index): void {
    for (var i = 0; i < record.childRecords.length; i++) {
      var childRecord = record.childRecords[i];
      childRecord.taskData.TaskID = this.ganttObj.currentViewData.length + 1;
      this.ganttObj.addRecord(childRecord.taskData, 'Child', index);
      if (childRecord.hasChildRecords) {
        this.addChildRecords(childRecord, index + (i + 1));
      }
    }
  }
}
