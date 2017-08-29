import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AddproducePage} from "../addproduce/addproduce";
import {CommodityProvider} from "../../providers/commodity/commodity";
import {commodity} from '../../models/commodity';


/**
 * Generated class for the MyProducePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-my-produce',
  templateUrl: 'my-produce.html',
})
export class MyProducePage implements OnInit {

  commodities:commodity[]

  ngOnInit(){
    this.commodityService.getCommodity().subscribe((commodities: commodity[]) => {
      this.commodities = commodities;
    });
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,  private commodityService : CommodityProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyProducePage');
  }
  addproduce(){
    this.navCtrl.push(AddproducePage);
  }
 /* showProduce(){
  //iteration method goes here
  for comodities
  console.log('commodities');
  }*/
}
