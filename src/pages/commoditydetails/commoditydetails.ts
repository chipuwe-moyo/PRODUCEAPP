import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CommodityProvider} from "../../providers/commodity/commodity";
import {commodity} from '../../models/commodity';
import {NotificationPage} from "../notification/notification";
/**
 * Generated class for the CommoditydetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-commoditydetails',
  templateUrl: 'commoditydetails.html',
})
export class CommoditydetailsPage implements OnInit{
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
  constructor(public navCtrl: NavController, public navParams: NavParams,private commodityService : CommodityProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommoditydetailsPage');
  }

notification(id){

    this.navCtrl.push(NotificationPage,{id});
}
}
