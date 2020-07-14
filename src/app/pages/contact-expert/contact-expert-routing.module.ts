import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactExpertPage } from './contact-expert.page';

const routes: Routes = [
  {
    path: '',
    component: ContactExpertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactExpertPageRoutingModule {}
