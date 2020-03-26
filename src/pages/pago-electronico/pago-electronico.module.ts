import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagoElectronicoPage } from './pago-electronico';
import { ModalSaldoInsuficientePageModule } from '../modal-saldo-insuficiente/modal-saldo-insuficiente.module';
import { ModalSaldoInsuficientePage } from '../modal-saldo-insuficiente/modal-saldo-insuficiente';

@NgModule({
  declarations: [
    PagoElectronicoPage
  ],
  imports: [
    IonicPageModule.forChild(PagoElectronicoPage),
    ModalSaldoInsuficientePageModule    
  ],
  entryComponents:[ModalSaldoInsuficientePage]
})
export class PagoElectronicoPageModule {}
