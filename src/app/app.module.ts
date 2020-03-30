import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA    } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { WelcomePage } from '../pages/welcome/welcome';
import { AddFormPage } from '../pages/add-form/add-form';
// import { ListPetsPage } from '../pages/list-pets/list-pets';
import { WakypetLogoPage } from '../pages/wakypet-logo/wakypet-logo';
import { AyudaPage } from '../pages/ayuda/ayuda';
import { AyudaPagoPage } from '../pages/ayuda-pago/ayuda-pago';
import { WalkTypePage } from '../pages/walk-type/walk-type';
import { LoadingPage } from '../pages/loading/loading';
import { AddPaseoPage } from '../pages/add-paseo/add-paseo';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
// import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PagoElectronicoPage } from '../pages/pago-electronico/pago-electronico';
import { ModalSaldoInsuficientePageModule } from '../pages/modal-saldo-insuficiente/modal-saldo-insuficiente.module';
import { ModalSaldoInsuficientePage } from '../pages/modal-saldo-insuficiente/modal-saldo-insuficiente';
import { ResumenPagoPage } from '../pages/resumen-pago/resumen-pago';


@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    // ListPage,
    HomePage,
    LoginPage,
    RegisterPage,
    WelcomePage,
    AddFormPage,
    AddPaseoPage,
    // ListPetsPage,
    LoadingPage,
    WakypetLogoPage,
    AyudaPage,
    AyudaPagoPage,
    WalkTypePage,
    PagoElectronicoPage,
    ResumenPagoPage
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgxDatatableModule,
    ModalSaldoInsuficientePageModule,
    // ResumenPagoPage
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    // ListPage,
    HomePage,
    LoginPage,
    RegisterPage,
    WelcomePage,
    AddFormPage,
    AddPaseoPage,
    // ListPetsPage,
    LoadingPage,
    WakypetLogoPage,
    AyudaPage,
    AyudaPagoPage,
    WalkTypePage,
    PagoElectronicoPage,
    ModalSaldoInsuficientePage,
    ResumenPagoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
