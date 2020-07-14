import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuoteListPageRoutingModule } from './quote-list-routing.module';

import { QuoteListPage } from './quote-list.page';
import {ProductListPageModule} from '../product-list/product-list.module';
import {QuoteModalFormComponent} from '../../component/quote-modal-form/quote-modal-form.component';

@NgModule({
    entryComponents: [QuoteModalFormComponent],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        QuoteListPageRoutingModule,
        ProductListPageModule,
    ],
  declarations: [QuoteListPage, QuoteModalFormComponent]
})
export class QuoteListPageModule {}
