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
  selected = 1;
  dayOpcSelected = 1;
  // diasSeleccionados = [1,0,0,0,0,0,0];
  daysWeek;

  constructor(public navCtrl: NavController, public navParams: NavParams)
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

  navigateToOtherPage()
  {
    this.navCtrl.setRoot(HomePage);
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
    debugger;
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
}
