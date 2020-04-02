import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { AddFormPage } from '../pages/add-form/add-form';
import { LoadingPage } from '../pages/loading/loading';
import { WakypetLogoPage } from '../pages/wakypet-logo/wakypet-logo';
import { AyudaPage } from '../pages/ayuda/ayuda';
import { AyudaPagoPage } from '../pages/ayuda-pago/ayuda-pago';
import { AddPaseoPage } from '../pages/add-paseo/add-paseo';
import { WalkTypePage } from '../pages/walk-type/walk-type';
import { PagoElectronicoPage } from '../pages/pago-electronico/pago-electronico';
import { ResumenPagoPage } from '../pages/resumen-pago/resumen-pago';
import { WakymailPage } from '../pages/wakymail/wakymail';
import { DetallesPaseoPage } from '../pages/detalles-paseo/detalles-paseo';
import { PerfilPaseadorPage } from '../pages/perfil-paseador/perfil-paseador';


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
      { title: 'Wakypet', component: WakypetLogoPage},
      { title: 'Welcome', component: HelloIonicPage},
      { title: 'Loading', component: LoadingPage},
      { title: 'Login', component: LoginPage},
      { title: 'Register', component: RegisterPage},
      { title: 'Home', component: HomePage},
      { title: 'Agregar Mascota', component: AddFormPage},
      { title: 'Agregar Paseo', component: AddPaseoPage},
      { title: 'Tipos Paseo', component: WalkTypePage},
      { title: 'Ayuda', component: AyudaPage},
      { title: 'Ayuda Pago', component: AyudaPagoPage},
      { title: 'Pago Electrónico', component: PagoElectronicoPage},
      { title: 'Resumen Pago', component: ResumenPagoPage},
      { title: 'Wakymail', component: WakymailPage},
      { title: 'Detalles Paseo', component: DetallesPaseoPage},
      { title: 'Paseador', component: PerfilPaseadorPage},
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
