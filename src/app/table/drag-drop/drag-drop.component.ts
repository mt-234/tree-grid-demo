import { Component, OnInit } from '@angular/core';
import { dragData } from '../../../jsontreegriddata';
@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent implements OnInit {
  public data: Object[] = [];
    public selectOptions: Object;

  constructor() { }

    ngOnInit(): void {
        this.data = dragData;
        this.selectOptions = { type: 'Multiple' };
    }

}
