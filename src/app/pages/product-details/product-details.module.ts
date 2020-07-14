import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductDetailsPageRoutingModule } from './product-details-routing.module';

import { ProductDetailsPage } from './product-details.page';
import {CommentPostComponent} from '../../component/comment-post/comment-post.component';
import {ProductListPageModule} from '../product-list/product-list.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ProductDetailsPageRoutingModule,
        ProductListPageModule
    ],
    exports: [
        CommentPostComponent
    ],
    declarations: [ProductDetailsPage, CommentPostComponent]
})
export class ProductDetailsPageModule {}
