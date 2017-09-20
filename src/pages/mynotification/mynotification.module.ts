import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MynotificationPage } from './mynotification';

@NgModule({
  declarations: [
    MynotificationPage,
  ],
  imports: [
    IonicPageModule.forChild(MynotificationPage),
  ],
  exports: [
    MynotificationPage
  ]
})
export class MynotificationPageModule {}
