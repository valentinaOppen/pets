import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the AddPaseoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-paseo',
  templateUrl: 'add-paseo.html',
})
export class AddPaseoPage {

  message = true;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPaseoPage');
  }

  closeMessage()
  {
    this.message = false;
  }

  navigateToOtherPage()
  {
    this.navCtrl.setRoot(HomePage);
  }

}
