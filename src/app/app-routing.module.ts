import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CopyPasteComponent } from './table/copy-paste/copy-paste.component';
import { DragDropComponent } from './table/drag-drop/drag-drop.component';
import { GridDemoComponent } from './table/grid-demo/grid-demo.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: GridDemoComponent },
  { path: 'dragdrop', component: DragDropComponent },
  { path: 'copypaste', component: CopyPasteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
