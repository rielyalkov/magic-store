import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminPageComponent} from './admin-page/admin-page.component';
import {AdminRoutingModule} from './admin-routing.module';
import {MaterialModule} from '../material.module';

@NgModule({
  declarations: [AdminPageComponent],
    imports: [
        CommonModule,
        AdminRoutingModule,
        MaterialModule,
    ],
})
export class AdminModule { }
