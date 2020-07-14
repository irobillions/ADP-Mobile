import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckoutProcessPage } from './checkout-process.page';

const routes: Routes = [
  {
    path: '',
    component: CheckoutProcessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckoutProcessPageRoutingModule {}
