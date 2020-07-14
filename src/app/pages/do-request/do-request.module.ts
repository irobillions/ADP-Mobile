import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoRequestPageRoutingModule } from './do-request-routing.module';

import { DoRequestPage } from './do-request.page';
import {ProductListPageModule} from '../product-list/product-list.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DoRequestPageRoutingModule,
        ProductListPageModule
    ],
  declarations: [DoRequestPage]
})
export class DoRequestPageModule {}
