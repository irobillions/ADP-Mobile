import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WishlistItemListPage } from './wishlist-item-list.page';

const routes: Routes = [
  {
    path: '',
    component: WishlistItemListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WishlistItemListPageRoutingModule {}
