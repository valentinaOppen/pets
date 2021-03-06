import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AddFormPage } from '../add-form/add-form';
import { WalkTypePage } from '../walk-type/walk-type';
import { ModalConfirmarPaseoPage } from '../modal-confirmar-paseo/modal-confirmar-paseo';
import { ResumenPagoPage } from '../resumen-pago/resumen-pago';
import { ModalConfirmarPaseoEfectivoPage } from '../modal-confirmar-paseo-efectivo/modal-confirmar-paseo-efectivo';

/**
 * Generated class for the AddPaseoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-paseo',
  templateUrl: 'add-paseo.html',
})
export class AddPaseoPage {

  message = true;
  selected:any = [];
  dayOpcSelected = 1;
  daysWeek;
  repeatWeek = true;
  typePay = 2;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalController:ModalController)
  {
    this.daysWeek =
    [
      { Id:0, Name:'Lun', Selec:1 },
      { Id:1, Name:'Mar', Selec:1 },
      { Id:2, Name:'Mié', Selec:0 },
      { Id:3, Name:'Jue', Selec:1 },
      { Id:4, Name:'Vie', Selec:1 },
      { Id:5, Name:'Sab', Selec:0 },
      { Id:6, Name:'Dom', Selec:0 },
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPaseoPage');
  }

  closeMessage()
  {
    this.message = false;
  }

  navigateToOtherPage(page)
  {
    if(page =='HomePage')
    {
      this.navCtrl.setRoot(HomePage);
    }

    if(page == 'WalkType')
    {
      this.navCtrl.setRoot(WalkTypePage);

    }

    if(page == 'AddFormPage')    
    {
      this.navCtrl.setRoot(AddFormPage);
    }

    if(page == 'ok-pago')
    {
      if(this.typePay == 2)
      {
        this.openModalPaseoOk();
        // this.navCtrl.setRoot(ModalConfirmarPaseoEfectivoPage);
      }
      else
      {
        this.navCtrl.setRoot(ResumenPagoPage);
      }
    }
  }

  async openModalPaseoOk()
  {       
    const modalPagoOk = await this.modalController.create('ModalConfirmarPaseoEfectivoPage');
    return await modalPagoOk.present();
    
  }

  changePetSelected(number)
  {
    this.selected = number;
  }

  changeOpcDaySelected(number)
  {
    this.dayOpcSelected = number;
  }

  selectDay(id)
  {
    var day = this.daysWeek.find(x=>x.Id==id);
    var index = this.daysWeek.indexOf(day);
    if(this.daysWeek[index].Selec == 1)
    {
      this.daysWeek[index].Selec = 0;
    }
    else
    {
      this.daysWeek[index].Selec = 1;
    }
  }

  selectRepeatWeek()
  {
    if(this.repeatWeek)
    {
      this.repeatWeek = false;
    }
    else
    {
      this.repeatWeek = true;
    }
  }

  changeTypePay(number)
  {
    this.typePay = number;
  }
}
