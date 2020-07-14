import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddressViewPageRoutingModule } from './address-view-routing.module';

import { AddressViewPage } from './address-view.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AddressViewPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [AddressViewPage]
})
export class AddressViewPageModule {}
