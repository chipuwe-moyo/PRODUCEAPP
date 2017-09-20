import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResetinfoPage } from './resetinfo';

@NgModule({
  declarations: [
    ResetinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(ResetinfoPage),
  ],
  exports: [
    ResetinfoPage
  ]
})
export class ResetinfoPageModule {}
