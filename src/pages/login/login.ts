import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import { WelcomePage } from '../welcome/welcome';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage
{
  private loginForm : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: [''],
    });
  }

  login = {
    email: '',
    password: ''
  };

  sendLogin(form) {
    console.log(form.value)
  }

  navigateToOtherPage():void
  {
    this.navCtrl.setRoot(HelloIonicPage);
  }

  navigateToWelcome():void
  {
    this.navCtrl.setRoot(WelcomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
