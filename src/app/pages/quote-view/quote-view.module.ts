import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuoteViewPageRoutingModule } from './quote-view-routing.module';

import { QuoteViewPage } from './quote-view.page';
import {ProductListPageModule} from '../product-list/product-list.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        QuoteViewPageRoutingModule,
        ProductListPageModule
    ],
  declarations: [QuoteViewPage]
})
export class QuoteViewPageModule {}
