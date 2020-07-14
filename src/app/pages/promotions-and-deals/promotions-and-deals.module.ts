import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PromotionsAndDealsPageRoutingModule } from './promotions-and-deals-routing.module';

import { PromotionsAndDealsPage } from './promotions-and-deals.page';
import {ProductListPageModule} from '../product-list/product-list.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PromotionsAndDealsPageRoutingModule,
        ProductListPageModule
    ],
  declarations: [PromotionsAndDealsPage]
})
export class PromotionsAndDealsPageModule {}
