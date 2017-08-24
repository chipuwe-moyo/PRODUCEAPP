import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyProducePage } from './my-produce';

@NgModule({
  declarations: [
    MyProducePage,
  ],
  imports: [
    IonicPageModule.forChild(MyProducePage),
  ],
  exports: [
    MyProducePage
  ]
})
export class MyProducePageModule {}
