import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AskQuotePage } from './ask-quote.page';

const routes: Routes = [
  {
    path: '',
    component: AskQuotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AskQuotePageRoutingModule {}
