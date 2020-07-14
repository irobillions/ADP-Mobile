import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalSearchPagePage } from './modal-search-page.page';

const routes: Routes = [
  {
    path: '',
    component: ModalSearchPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalSearchPagePageRoutingModule {}
