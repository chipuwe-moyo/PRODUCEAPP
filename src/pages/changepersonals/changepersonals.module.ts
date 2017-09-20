import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChangepersonalsPage } from './changepersonals';

@NgModule({
  declarations: [
    ChangepersonalsPage,
  ],
  imports: [
    IonicPageModule.forChild(ChangepersonalsPage),
  ],
  exports: [
    ChangepersonalsPage
  ]
})
export class ChangepersonalsPageModule {}
