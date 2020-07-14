import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YourSubscriptionsPageRoutingModule } from './your-subscriptions-routing.module';

import { YourSubscriptionsPage } from './your-subscriptions.page';
import {ProductListPageModule} from '../product-list/product-list.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        YourSubscriptionsPageRoutingModule,
        ProductListPageModule
    ],
  declarations: [YourSubscriptionsPage]
})
export class YourSubscriptionsPageModule {}
