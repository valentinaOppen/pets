import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaMascotasPage } from './lista-mascotas';

@NgModule({
  declarations: [
    ListaMascotasPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaMascotasPage),
  ],
})
export class ListaMascotasPageModule {}
