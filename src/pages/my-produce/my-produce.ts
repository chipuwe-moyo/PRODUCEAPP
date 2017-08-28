import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AddproducePage} from "../addproduce/addproduce";
import {CommodityProvider} from "../../providers/commodity/commodity";


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
export class MyProducePage {

  commodityList =[];

  constructor(public navCtrl: NavController, public navParams: NavParams,  private commodityService : CommodityProvider) {

    this.getCommodity();
  }
getCommodity(){
    this.commodityService.getCommodity().subscribe((data)=>{
      this.commodityList = data;

    });

}
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyProducePage');
  }
  addproduce(){

    this.navCtrl.push(AddproducePage);
  }
}
