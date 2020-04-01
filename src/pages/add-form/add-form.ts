import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AddPaseoPage } from '../add-paseo/add-paseo';

@Component({
  selector: 'page-add-form',
  templateUrl: 'add-form.html',
})
export class AddFormPage {

  form : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalController:ModalController,public formBuilder: FormBuilder) 
  {
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      fecha: ['', Validators.required],
      raza: ['', Validators.required]
    });    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddFormPage');
  }

  formControlName="myField"
  async navigateToOtherPage(page)
  {
    switch (page) {
      case 'close':
        this.navCtrl.setRoot(AddPaseoPage);
        break;
      case 'ok':
        const modalok = await this.modalController.create('ModalAddpetOkPage');
        modalok.present();
        break;
      case 'error':
        const modalerror = await this.modalController.create('ModalAddpetErrorPage');
        modalerror.present();
        break;
      case 'error-red':
        const modalerrorred = await this.modalController.create('ModalAddpetErrorRedPage');
        modalerrorred.present();
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
