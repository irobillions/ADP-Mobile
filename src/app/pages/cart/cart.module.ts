import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartPageRoutingModule } from './cart-routing.module';

import { CartPage } from './cart.page';
import {ProductListPageModule} from '../product-list/product-list.module';
import {PopoverAddressMenuComponent} from '../../component/popover-address-menu/popover-address-menu.component';
import {CartCheckoutModalPage} from '../cart-checkout-modal/cart-checkout-modal.page';
import {CartCheckoutModalPageModule} from '../cart-checkout-modal/cart-checkout-modal.module';

@NgModule({
    entryComponents: [CartCheckoutModalPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CartPageRoutingModule,
        ProductListPageModule,
        CartCheckoutModalPageModule
    ],
  declarations: [CartPage]
})
export class CartPageModule {}
