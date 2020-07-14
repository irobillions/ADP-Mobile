import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarModelsListPage } from './car-models-list.page';

const routes: Routes = [
  {
    path: '',
    component: CarModelsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarModelsListPageRoutingModule {}
