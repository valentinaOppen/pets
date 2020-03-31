import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the ModalPagoOkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-pago-ok',
  templateUrl: 'modal-pago-ok.html',
})
export class ModalPagoOkPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController) 
  {}

  closeModal()
  {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPagoOkPage');
  }

  navigateHome()
  {
    this.navCtrl.setRoot(HomePage);
  }

}
