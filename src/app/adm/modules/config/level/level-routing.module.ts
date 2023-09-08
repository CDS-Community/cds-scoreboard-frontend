import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewLevelComponent } from './pages/new-level/new-level.component';
import { EditLevelComponent } from './pages/edit-level/edit-level.component';
import { ListLevelComponent } from './pages/list-level/list-level.component';

const routes: Routes = [
  {
    path: 'new',
    component: NewLevelComponent
  },
  {
    path: 'edit',
    component: EditLevelComponent
  },
  {
    path: 'list',
    component: ListLevelComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LevelRoutingModule { }
