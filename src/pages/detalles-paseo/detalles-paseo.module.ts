import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetallesPaseoPage } from './detalles-paseo';

@NgModule({
  declarations: [
    DetallesPaseoPage,
  ],
  imports: [
    IonicPageModule.forChild(DetallesPaseoPage),
  ],
})
export class DetallesPaseoPageModule {}
