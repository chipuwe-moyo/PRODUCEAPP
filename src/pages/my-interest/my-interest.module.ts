import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyInterestPage } from './my-interest';

@NgModule({
  declarations: [
    MyInterestPage,
  ],
  imports: [
    IonicPageModule.forChild(MyInterestPage),
  ],
  exports: [
    MyInterestPage
  ]
})
export class MyInterestPageModule {}
