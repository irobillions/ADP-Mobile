import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AskQuotePageRoutingModule } from './ask-quote-routing.module';

import { AskQuotePage } from './ask-quote.page';
import {ProductListPageModule} from '../product-list/product-list.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AskQuotePageRoutingModule,
        ProductListPageModule
    ],
  declarations: [AskQuotePage]
})
export class AskQuotePageModule {}
