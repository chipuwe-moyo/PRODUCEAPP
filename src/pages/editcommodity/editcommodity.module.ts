import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditcommodityPage } from './editcommodity';

@NgModule({
  declarations: [
    EditcommodityPage,
  ],
  imports: [
    IonicPageModule.forChild(EditcommodityPage),
  ],
  exports: [
    EditcommodityPage
  ]
})
export class EditcommodityPageModule {}
