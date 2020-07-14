import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YourSubscriptionsPage } from './your-subscriptions.page';

const routes: Routes = [
  {
    path: '',
    component: YourSubscriptionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YourSubscriptionsPageRoutingModule {}
