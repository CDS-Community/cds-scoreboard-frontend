import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListPossitionComponent } from './pages/list-possition/list-possition.component';
import { NewPossitionComponent } from './pages/new-possition/new-possition.component';
import { EditPossitionComponent } from './pages/edit-possition/edit-possition.component';

const routes: Routes = [
  {
    path: 'new',
    component: NewPossitionComponent
  },
  {
    path: 'list',
    component: ListPossitionComponent
  },
  {
    path: 'edit/:id',
    component: EditPossitionComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PossitionRoutingModule { }
