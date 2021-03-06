import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the ModalConfirmarPaseoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-confirmar-paseo',
  templateUrl: 'modal-confirmar-paseo.html',
})
export class ModalConfirmarPaseoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController) {
  }

  closeModal()
  {
    this.viewCtrl.dismiss();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalConfirmarPaseoPage');
  }

  navigateHome()
  {
    this.navCtrl.setRoot(HomePage);
  }

}
