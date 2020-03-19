import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WalkTypePage } from './walk-type';

@NgModule({
  declarations: [
    WalkTypePage,
  ],
  imports: [
    IonicPageModule.forChild(WalkTypePage),
  ],
})
export class WalkTypePageModule {}
