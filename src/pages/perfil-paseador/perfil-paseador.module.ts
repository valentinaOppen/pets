import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerfilPaseadorPage } from './perfil-paseador';

@NgModule({
  declarations: [
    PerfilPaseadorPage,
  ],
  imports: [
    IonicPageModule.forChild(PerfilPaseadorPage),
  ],
})
export class PerfilPaseadorPageModule {}
