import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ModalOptions } from 'ionic-angular';
import { ModalSaldoInsuficientePage } from '../modal-saldo-insuficiente/modal-saldo-insuficiente';
import { AddPaseoPage } from '../add-paseo/add-paseo';
import { ModalPagoOkPage } from '../modal-pago-ok/modal-pago-ok';
import { ModalPagoErrorPage } from '../modal-pago-error/modal-pago-error';
import { HomePage } from '../home/home';

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

  navigateToOtherPage()
  {    
    // this.navCtrl.setRoot(HomePage);
    this.openModalPaseoOk();
  }

  async openModalErrorPago()
  {  
    const myModalOptions: ModalOptions = {      
      cssClass : 'my-modal-inner'
    };
    
    const modalError = await this.modalController.create('ModalSaldoInsuficientePage', null, myModalOptions);
    return await modalError.present();
    
  }

  async openModalPaseoOk()
  {       
    const modalPagoOk = await this.modalController.create('ModalConfirmarPaseoPage');
    return await modalPagoOk.present(); 
  }

  async openModalOk()
  {       
    const modalPagoOk = await this.modalController.create('ModalPagoOkPage');
    return await modalPagoOk.present();
    
  }


  async openModalError()
  {          
    const modalError = await this.modalController.create('ModalPagoErrorPage');
    return await modalError.present();
    
  }

  async openModalConfirmarPaseo()
  {                  
    const modalError = await this.modalController.create('ModalConfirmarPaseoPage');
    return await modalError.present();
    
  }

  
  



}
