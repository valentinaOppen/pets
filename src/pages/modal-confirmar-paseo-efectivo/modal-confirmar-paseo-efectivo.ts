import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the ModalConfirmarPaseoEfectivoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-confirmar-paseo-efectivo',
  templateUrl: 'modal-confirmar-paseo-efectivo.html',
})
export class ModalConfirmarPaseoEfectivoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalConfirmarPaseoEfectivoPage');
  }

  navigateHome()
  {
    this.navCtrl.setRoot(HomePage);
  }

}
