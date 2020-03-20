import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalAddpetErrorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-addpet-error',
  templateUrl: 'modal-addpet-error.html',
})
export class ModalAddpetErrorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalAddpetErrorPage');
  }

  closeModal()
  {
    this.viewCtrl.dismiss();
  }


}
