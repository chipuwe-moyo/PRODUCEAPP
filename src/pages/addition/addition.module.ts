import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdditionPage } from './addition';

@NgModule({
  declarations: [
    AdditionPage,
  ],
  imports: [
    IonicPageModule.forChild(AdditionPage),
  ],
  exports: [
    AdditionPage
  ]
})
export class AdditionPageModule {}
