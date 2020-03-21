import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { HomePage } from '../home/home';

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

  async navigateToOtherPage(page)
  {
    switch (page) {
      case 'close':
        this.navCtrl.setRoot(HomePage);
        break;
      case 'ok':
        const modalok = await this.modalController.create('ModalAddpetOkPage');
        modalok.present();
        break;
      case 'error':
        const modalerror = await this.modalController.create('ModalAddpetErrorPage');
        modalerror.present();
        break;
    }
    // this.navCtrl.setRoot(HomePage);
    // const modal = await this.modalController.create('ModalAddpetOkPage');
    // modal.present();
  }

  async navigateToOtherPageError()
  {
    this.navCtrl.setRoot(HomePage);
    const modal = await this.modalController.create('ModalAddpetErrorPage');
    modal.present();
  }
}
