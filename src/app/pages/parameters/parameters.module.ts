import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParametersPageRoutingModule } from './parameters-routing.module';

import { ParametersPage } from './parameters.page';
import {ProductListPageModule} from '../product-list/product-list.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ParametersPageRoutingModule,
        ProductListPageModule
    ],
  declarations: [ParametersPage]
})
export class ParametersPageModule {}
