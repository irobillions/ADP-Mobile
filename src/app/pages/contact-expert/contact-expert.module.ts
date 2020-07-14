import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactExpertPageRoutingModule } from './contact-expert-routing.module';

import { ContactExpertPage } from './contact-expert.page';
import {ProductListPageModule} from '../product-list/product-list.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ContactExpertPageRoutingModule,
        ProductListPageModule
    ],
  declarations: [ContactExpertPage]
})
export class ContactExpertPageModule {}
