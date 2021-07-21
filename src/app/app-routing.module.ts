import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridDemoComponent } from './table/grid-demo/grid-demo.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: GridDemoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
