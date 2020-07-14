import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WishListPageRoutingModule } from './wish-list-routing.module';

import { WishListPage } from './wish-list.page';
import {ProductListPageModule} from '../product-list/product-list.module';
import {WishListFormComponent} from '../../component/wish-list-form/wish-list-form.component';

@NgModule({
    entryComponents: [WishListFormComponent],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        WishListPageRoutingModule,
        ProductListPageModule
    ],
  declarations: [WishListPage, WishListFormComponent]
})
export class WishListPageModule {}
