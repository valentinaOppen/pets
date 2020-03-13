import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListPetsPage } from './list-pets';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [
    ListPetsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListPetsPage),
    NgxDatatableModule
  ],
})
export class ListPetsPageModule {}
