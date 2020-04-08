import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the FormDatosCuentaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-form-datos-cuenta',
  templateUrl: 'form-datos-cuenta.html',
})
export class FormDatosCuentaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalController:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormDatosCuentaPage');
  }

  navigateToOtherPage()
  {
    
  }

  async openModalDatosOk()
  {       
    const modalPagoOk = await this.modalController.create('ModalConfDatosCuentaPage');
    return await modalPagoOk.present(); 
  }
}
