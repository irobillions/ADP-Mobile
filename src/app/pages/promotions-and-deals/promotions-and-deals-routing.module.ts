import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PromotionsAndDealsPage } from './promotions-and-deals.page';

const routes: Routes = [
  {
    path: '',
    component: PromotionsAndDealsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PromotionsAndDealsPageRoutingModule {}
