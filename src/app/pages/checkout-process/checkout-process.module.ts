import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckoutProcessPageRoutingModule } from './checkout-process-routing.module';

import { CheckoutProcessPage } from './checkout-process.page';
import {ProductListPageModule} from '../product-list/product-list.module';
import {AddressModalComponent} from '../../component/address-modal/address-modal.component';

@NgModule({
    entryComponents: [AddressModalComponent],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CheckoutProcessPageRoutingModule,
        ProductListPageModule
    ],
  declarations: [CheckoutProcessPage, AddressModalComponent]
})
export class CheckoutProcessPageModule {}
