import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ViewEncapsulation } from '@angular/core';
/**
 * Generated class for the ListPetsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-pets',
  templateUrl: 'list-pets.html',
  encapsulation: ViewEncapsulation.None
})
export class ListPetsPage
{
  // public data: Data;
  public columns: any;
  public rows: any;

  listPets:any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams)
  {
    this.columns = [
      { name: 'Nombre' },
      { name: 'Raza' },
      { name: 'Nacimiento' },
      { name: 'Foto' }
    ];

    this.listPets =
    [
      {
          "nombre": "Perrito Uno",
          "raza": "Puig",
          "nacimiento": "10/07/2015",
          "foto": "../../assets/imgs/perros/perro1.jpg"
      },
      {
        "nombre": "Perrito Dos",
        "raza": "Puig",
        "nacimiento": "10/07/2015",
        "foto": "../../assets/imgs/perros/perro2.jpeg"
      },
      {
        "nombre": "Perrito Tres",
        "raza": "Puig",
        "nacimiento": "10/07/2015",
        "foto": "../../assets/imgs/perros/perro3.jpg"
      },
      {
        "nombre": "Perrito Cuatro",
        "raza": "Puig",
        "nacimiento": "10/07/2015",
        "foto": "../../assets/imgs/perros/perro4.png"
      }];

      this.rows = this.listPets;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPetsPage');
  }

  displayDetails(p)
  {

  }



}
