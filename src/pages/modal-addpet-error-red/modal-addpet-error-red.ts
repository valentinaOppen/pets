import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalAddpetErrorRedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-addpet-error-red',
  templateUrl: 'modal-addpet-error-red.html',
})
export class ModalAddpetErrorRedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalAddpetErrorRedPage');
  }

  closeModal()
  {
    this.viewCtrl.dismiss();
  }

}
