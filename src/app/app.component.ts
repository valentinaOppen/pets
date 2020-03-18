import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { AddFormPage } from '../pages/add-form/add-form';
import { ListPetsPage } from '../pages/list-pets/list-pets';
import { LoadingPage } from '../pages/loading/loading';
import { WakypetLogoPage } from '../pages/wakypet-logo/wakypet-logo';
import { AyudaPage } from '../pages/ayuda/ayuda';
import { AyudaPagoPage } from '../pages/ayuda-pago/ayuda-pago';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = HelloIonicPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Home', component: HomePage},
      { title: 'Login', component: LoginPage},
      { title: 'Register', component: RegisterPage},
      { title: 'Agregar Mascota', component: AddFormPage},
      { title: 'Welcome', component: HelloIonicPage},
      { title: 'Lista Mascotas', component: ListPetsPage},
      { title: 'Loading', component: LoadingPage},
      { title: 'Wakypet', component: WakypetLogoPage},
      { title: 'Ayuda', component: AyudaPage},
      { title: 'Ayuda Pago', component: AyudaPagoPage},

    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
