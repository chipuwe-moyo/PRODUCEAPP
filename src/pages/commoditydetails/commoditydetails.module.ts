import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommoditydetailsPage } from './commoditydetails';

@NgModule({
  declarations: [
    CommoditydetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CommoditydetailsPage),
  ],
  exports: [
    CommoditydetailsPage
  ]
})
export class CommoditydetailsPageModule {}
