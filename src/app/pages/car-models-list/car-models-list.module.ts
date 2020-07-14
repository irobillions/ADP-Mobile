import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarModelsListPageRoutingModule } from './car-models-list-routing.module';

import { CarModelsListPage } from './car-models-list.page';
import {ProductListPageModule} from '../product-list/product-list.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CarModelsListPageRoutingModule,
        ProductListPageModule
    ],
  declarations: [CarModelsListPage]
})
export class CarModelsListPageModule {}
