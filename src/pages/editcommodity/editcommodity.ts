import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CommodityProvider} from "../../providers/commodity/commodity";
import {commodity} from "../../models/commodity";
import {ProduceDetailsPage} from "../produce-details/produce-details";
import {NgForm} from "@angular/forms";
/**
 * Generated class for the EditcommodityPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-editcommodity',
  templateUrl: 'editcommodity.html',
})
export class EditcommodityPage {

commodity : any;

  constructor(public navCtrl: NavController, public navParams: NavParams , public commodityService : CommodityProvider) {
    this.commodity = navParams.get('commodity');
    console.log(this.commodity);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditcommodityPage');
  }
   onUpdate(form: NgForm){
  this.commodityService.updateCommodity(
    this.commodity.id,
  form.value.product,
  form.value.description,
  form.value.price,
  form.value.quantity,
  form.value.metric)
.subscribe(
() => alert("Commodity updated")
);
  this.navCtrl.push(ProduceDetailsPage);
  form.reset();
}

}
