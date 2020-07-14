import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WishlistItemListPageRoutingModule } from './wishlist-item-list-routing.module';

import { WishlistItemListPage } from './wishlist-item-list.page';
import {ProductListPageModule} from '../product-list/product-list.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        WishlistItemListPageRoutingModule,
        ProductListPageModule
    ],
  declarations: [WishlistItemListPage]
})
export class WishlistItemListPageModule {}
