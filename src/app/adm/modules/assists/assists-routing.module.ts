import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAssistsComponent } from './pages/list-assists/list-assists.component';
import { CheckAssistComponent } from './pages/check-assist/check-assist.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListAssistsComponent
  },
  {
    path: 'check',
    component: CheckAssistComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssistsRoutingModule { }
