import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProduceDetailsPage } from './produce-details';

@NgModule({
  declarations: [
    ProduceDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ProduceDetailsPage),
  ],
  exports: [
    ProduceDetailsPage
  ]
})
export class ProduceDetailsPageModule {}
