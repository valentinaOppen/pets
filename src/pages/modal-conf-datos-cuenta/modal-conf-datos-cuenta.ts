import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormDatosCuentaPage } from '../form-datos-cuenta/form-datos-cuenta';

/**
 * Generated class for the ModalConfDatosCuentaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-conf-datos-cuenta',
  templateUrl: 'modal-conf-datos-cuenta.html',
})
export class ModalConfDatosCuentaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalConfDatosCuentaPage');
  }

  closeModal()
  {
    this.navCtrl.setRoot(FormDatosCuentaPage);
  }

}


