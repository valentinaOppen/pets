import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalSaldoInsuficientePage } from './modal-saldo-insuficiente';

@NgModule({
  declarations: [
    ModalSaldoInsuficientePage,
  ],
  imports: [
    IonicPageModule.forChild(ModalSaldoInsuficientePage),
  ],
})
export class ModalSaldoInsuficientePageModule {}
