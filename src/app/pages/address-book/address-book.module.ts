import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddressBookPageRoutingModule } from './address-book-routing.module';

import { AddressBookPage } from './address-book.page';
import {PopoverAddressMenuComponent} from '../../component/popover-address-menu/popover-address-menu.component';
import {UserService} from '../../services/auth/user.service';

@NgModule({
  entryComponents: [PopoverAddressMenuComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddressBookPageRoutingModule
  ],
  providers: [UserService],
  declarations: [AddressBookPage, PopoverAddressMenuComponent]
})
export class AddressBookPageModule {}
