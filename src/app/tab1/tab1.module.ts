import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import {SearchBarComponent} from '../component/search-bar/search-bar.component';
import {ModalSearchPagePage} from '../component/modal-search-page/modal-search-page.page';
import {ModalSearchPagePageModule} from '../component/modal-search-page/modal-search-page.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
      ModalSearchPagePageModule
  ],
  exports: [
    SearchBarComponent
  ],
  declarations: [Tab1Page, SearchBarComponent],
  entryComponents: [ModalSearchPagePage]
})
export class Tab1PageModule {}
