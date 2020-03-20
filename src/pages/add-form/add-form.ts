import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-add-form',
  templateUrl: 'add-form.html',
})
export class AddFormPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalController:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddFormPage');
  }

  async navigateToOtherPage()
  {
    this.navCtrl.setRoot(HomePage);
    const modal = await this.modalController.create('ModalAddpetOkPage');
    modal.present();
  }

  async navigateToOtherPageError()
  {
    this.navCtrl.setRoot(HomePage);
    const modal = await this.modalController.create('ModalAddpetErrorPage');
    modal.present();
  }
}
