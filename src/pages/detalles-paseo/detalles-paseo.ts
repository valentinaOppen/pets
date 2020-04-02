import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddPaseoPage } from '../add-paseo/add-paseo';

/**
 * Generated class for the DetallesPaseoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalles-paseo',
  templateUrl: 'detalles-paseo.html',
})
export class DetallesPaseoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallesPaseoPage');
  }

  navigateToOtherPage()
  {
    this.navCtrl.setRoot(AddPaseoPage);
  }

}
