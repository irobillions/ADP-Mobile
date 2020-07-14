import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderFilterPage } from './order-filter.page';

const routes: Routes = [
  {
    path: '',
    component: OrderFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderFilterPageRoutingModule {}
