import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaseadorCuentaPage } from './paseador-cuenta';

@NgModule({
  declarations: [
    PaseadorCuentaPage,
  ],
  imports: [
    IonicPageModule.forChild(PaseadorCuentaPage),
  ],
})
export class PaseadorCuentaPageModule {}
