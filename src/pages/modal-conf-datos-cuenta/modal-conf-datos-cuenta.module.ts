import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalConfDatosCuentaPage } from './modal-conf-datos-cuenta';

@NgModule({
  declarations: [
    ModalConfDatosCuentaPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalConfDatosCuentaPage),
  ],
})
export class ModalConfDatosCuentaPageModule {}
