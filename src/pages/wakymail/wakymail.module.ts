import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WakymailPage } from './wakymail';

@NgModule({
  declarations: [
    WakymailPage,
  ],
  imports: [
    IonicPageModule.forChild(WakymailPage),
  ],
})
export class WakymailPageModule {}
