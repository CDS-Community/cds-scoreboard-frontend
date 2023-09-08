import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewComissionComponent } from './pages/new-comission/new-comission.component';
import { ListComissionComponent } from './pages/list-comission/list-comission.component';
import { EditComissionComponent } from './pages/edit-comission/edit-comission.component';

const routes: Routes = [
  {
    path: 'new',
    component: NewComissionComponent
  },
  {
    path: 'list',
    component: ListComissionComponent
  },
  {
    path: 'edit/:id',
    component: EditComissionComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComissionRoutingModule { }
