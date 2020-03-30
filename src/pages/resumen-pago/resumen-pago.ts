import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PagoElectronicoPage } from '../pago-electronico/pago-electronico';

/**
 * Generated class for the ResumenPagoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resumen-pago',
  templateUrl: 'resumen-pago.html',
})
export class ResumenPagoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResumenPagoPage');
  }

  async navigateToOtherPage()
  {
    this.navCtrl.setRoot(PagoElectronicoPage);
  }

}
