import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommentListPageRoutingModule } from './comment-list-routing.module';

import { CommentListPage } from './comment-list.page';
import {ProductListPageModule} from '../product-list/product-list.module';
import {ProductDetailsPageModule} from '../product-details/product-details.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CommentListPageRoutingModule,
        ProductListPageModule,
        ProductDetailsPageModule
    ],
  declarations: [CommentListPage]
})
export class CommentListPageModule {}
