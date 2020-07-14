import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartCheckoutModalPage } from './cart-checkout-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CartCheckoutModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartCheckoutModalPageRoutingModule {}
