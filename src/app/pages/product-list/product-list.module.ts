import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductListPageRoutingModule } from './product-list-routing.module';

import { ProductListPage } from './product-list.page';
import {HeaderComponent} from '../../component/header/header.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ProductListPageRoutingModule
    ],
    exports: [
        HeaderComponent
    ],
    declarations: [ProductListPage, HeaderComponent]
})
export class ProductListPageModule {}
