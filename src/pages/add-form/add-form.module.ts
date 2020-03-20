import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddFormPage } from './add-form';
// import { ModalPage } from '../modal/modal';

@NgModule({
  declarations: [
    AddFormPage
    // ,ModalPage
  ],
  imports: [
    IonicPageModule.forChild(AddFormPage),
  ],
  // entryComponents: [ModalPage]
})
export class AddFormPageModule {}
