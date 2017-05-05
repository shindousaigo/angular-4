import { NgModule } from '@angular/core';


import { HomepageRoutingModule } from './homepage-routing.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { HomepageComponent } from './homepage.component';

@NgModule({
  imports: [
    HomepageRoutingModule,
    BsDropdownModule,
  ],
  declarations: [
    HomepageComponent
  ]
})
export class HomepageModule { }
