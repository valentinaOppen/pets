import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalConfirmarPaseoPage } from './modal-confirmar-paseo';

@NgModule({
  declarations: [
    ModalConfirmarPaseoPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalConfirmarPaseoPage),
  ],
})
export class ModalConfirmarPaseoPageModule {}
