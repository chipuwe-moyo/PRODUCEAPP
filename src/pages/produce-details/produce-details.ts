import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CommodityProvider} from "../../providers/commodity/commodity";
import {commodity} from '../../models/commodity';

/**
 * Generated class for the ProduceDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-produce-details',
  templateUrl: 'produce-details.html',
})
export class ProduceDetailsPage {

  commodities:commodity[]
  product:string;



  constructor(public navCtrl: NavController, public navParams: NavParams ,private commodityService : CommodityProvider) {
    this.product = navParams.get('product');
    commodityService.loadDetails(this.product).subscribe(commodities=> {
      this.commodities= commodities;
      console.log(commodities)
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProduceDetailsPage');
  }

}
