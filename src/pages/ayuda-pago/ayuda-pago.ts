import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the AyudaPagoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ayuda-pago',
  templateUrl: 'ayuda-pago.html',
})
export class AyudaPagoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navigateToOtherPage()
  {
    this.navCtrl.setRoot(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AyudaPagoPage');
  }

}
