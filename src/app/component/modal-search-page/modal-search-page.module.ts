import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalSearchPagePageRoutingModule } from './modal-search-page-routing.module';

import { ModalSearchPagePage } from './modal-search-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalSearchPagePageRoutingModule
  ],
  declarations: [ModalSearchPagePage]
})
export class ModalSearchPagePageModule {}
