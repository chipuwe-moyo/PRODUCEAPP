import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CommodityProvider} from "../../providers/commodity/commodity";
import {commodity} from '../../models/commodity';
import {ProduceDetailsPage} from "../produce-details/produce-details";
import {CommoditydetailsPage} from "../commoditydetails/commoditydetails";
/**
 * Generated class for the ProducePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-produce',
  templateUrl: 'produce.html',
})
export class ProducePage implements OnInit {


id: number;
  commodities:commodity[]
  ngOnInit(){
    this.commodityService.getCommodity().subscribe((commodities: commodity[]) => {
      this.commodities = commodities;
    });


  }





  constructor(public navCtrl: NavController, public navParams: NavParams,public commodityService: CommodityProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProducePage');
  }



  goToDetails(id: number) {
    this.navCtrl.push(CommoditydetailsPage, {id});
  }

}
