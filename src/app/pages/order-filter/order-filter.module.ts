import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderFilterPageRoutingModule } from './order-filter-routing.module';

import { OrderFilterPage } from './order-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderFilterPageRoutingModule
  ],
  declarations: [OrderFilterPage]
})
export class OrderFilterPageModule {}
