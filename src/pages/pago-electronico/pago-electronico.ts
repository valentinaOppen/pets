import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ModalOptions } from 'ionic-angular';
import { ModalSaldoInsuficientePage } from '../modal-saldo-insuficiente/modal-saldo-insuficiente';

@IonicPage()  
@Component({
  selector: 'page-pago-electronico',
  templateUrl: 'pago-electronico.html',
})
export class PagoElectronicoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalController:ModalController) {
  }

  ionViewDidLoad() {
   
  }

  async openModalErrorPago()
  {  
    const myModalOptions: ModalOptions = {      
      cssClass : 'modal-saldo-insuficiente'
    };
    // const modalError = await this.modalController.create({
    //   component: ModalSaldoInsuficientePage,
    //   cssClass: 'modal-saldo-insuficiente'
    // });
    const modalError = await this.modalController.create('ModalSaldoInsuficientePage', null, myModalOptions);
    return await modalError.present();
    
  }
  



}
