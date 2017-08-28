import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddproducePage } from './addproduce';

@NgModule({
  declarations: [
    AddproducePage,
  ],
  imports: [
    IonicPageModule.forChild(AddproducePage),
  ],
  exports: [
    AddproducePage
  ]
})
export class AddproducePageModule {}
