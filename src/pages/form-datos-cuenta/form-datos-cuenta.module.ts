import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormDatosCuentaPage } from './form-datos-cuenta';

@NgModule({
  declarations: [
    FormDatosCuentaPage,
  ],
  imports: [
    IonicPageModule.forChild(FormDatosCuentaPage),
  ],
})
export class FormDatosCuentaPageModule {}
