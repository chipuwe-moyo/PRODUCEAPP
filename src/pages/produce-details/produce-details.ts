import { Component ,OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CommodityProvider} from "../../providers/commodity/commodity";
import {commodity} from '../../models/commodity';
import {EditcommodityPage} from "../editcommodity/editcommodity";
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
export class ProduceDetailsPage implements OnInit {
  commodity:commodity;
  product:string;
  id:number;

  ngOnInit(){
    this.id = this.navParams.get('id');
    this.commodityService.getCommodityInfo(this.id).subscribe(commodity => {
      this.commodity = commodity;
console.log(commodity);
    })
  }

  constructor(public navCtrl: NavController, public navParams: NavParams ,private commodityService : CommodityProvider) {


  }

  //onDeleted(commodity: commodity) {
   // const position = this.commodity.findIndex(
    //  (commodityEl: commodity) => {
      //  return commodityEl.id == commodity.id;
     // }
  //  );
  //  this.commodity.splice(position, 1);
//  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProduceDetailsPage');
  }

  edit(commodity){

    this.navCtrl.push(EditcommodityPage, {commodity: commodity});
  }


}
