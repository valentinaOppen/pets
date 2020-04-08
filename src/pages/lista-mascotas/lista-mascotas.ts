import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ModalOptions } from 'ionic-angular';
import { AddFormPage } from '../add-form/add-form';

/**
 * Generated class for the ListaMascotasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-mascotas',
  templateUrl: 'lista-mascotas.html',
})
export class ListaMascotasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalController:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaMascotasPage');
  }

  async eliminarMascota()
  {    
    const myModalOptions: ModalOptions = {      
      cssClass : 'my-modal-conf-delete'
    };
    
    const modalError = await this.modalController.create('ModalConfDeleteMascotaPage', null, myModalOptions);
    return await modalError.present();
  }

  editarMascota()
  {
    this.navCtrl.setRoot(AddFormPage);
  }

}
