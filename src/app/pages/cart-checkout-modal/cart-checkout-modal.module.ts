import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartCheckoutModalPageRoutingModule } from './cart-checkout-modal-routing.module';

import { CartCheckoutModalPage } from './cart-checkout-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartCheckoutModalPageRoutingModule
  ],
  declarations: [CartCheckoutModalPage]
})
export class CartCheckoutModalPageModule {}
