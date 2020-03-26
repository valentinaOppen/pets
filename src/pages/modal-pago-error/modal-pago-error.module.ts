import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalPagoErrorPage } from './modal-pago-error';

@NgModule({
  declarations: [
    ModalPagoErrorPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalPagoErrorPage),
  ],
})
export class ModalPagoErrorPageModule {}
