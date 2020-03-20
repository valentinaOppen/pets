import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal-addpet-ok',
  templateUrl: 'modal-addpet-ok.html',
})
export class ModalAddpetOkPage
{

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController) {
  }

  closeModal()
  {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalAddpetOkPage');
  }

}
