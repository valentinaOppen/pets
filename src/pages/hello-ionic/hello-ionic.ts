import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
import { AyudaPage } from '../ayuda/ayuda';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {

  constructor(public navCtrl: NavController) {

  }

  navigateToLogin():void
  {
    this.navCtrl.setRoot(LoginPage);
  }

  navigateToRegister():void
  {
    this.navCtrl.setRoot(RegisterPage);
  }

  navigateToHome():void
  {
    this.navCtrl.setRoot(HomePage);
  }

  navigateToHelp():void
  {
    this.navCtrl.setRoot(AyudaPage);
  }
}
