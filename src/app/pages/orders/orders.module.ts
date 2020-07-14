import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdersPageRoutingModule } from './orders-routing.module';

import { OrdersPage } from './orders.page';
import {SingleOrderComponent} from '../../component/single-order/single-order.component';
import {ProductListPageModule} from '../product-list/product-list.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        OrdersPageRoutingModule,
        ProductListPageModule
    ],
  declarations: [OrdersPage, SingleOrderComponent]
})
export class OrdersPageModule {}
