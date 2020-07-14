import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsListByCarPageRoutingModule } from './products-list-by-car-routing.module';

import { ProductsListByCarPage } from './products-list-by-car.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsListByCarPageRoutingModule
  ],
  declarations: [ProductsListByCarPage]
})
export class ProductsListByCarPageModule {}
