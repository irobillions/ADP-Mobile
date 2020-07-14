import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsListByCarPage } from './products-list-by-car.page';

const routes: Routes = [
  {
    path: '',
    component: ProductsListByCarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsListByCarPageRoutingModule {}
