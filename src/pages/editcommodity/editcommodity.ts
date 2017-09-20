///<reference path="../my-produce/my-produce.ts"/>
import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {CommodityProvider} from "../../providers/commodity/commodity";
import {commodity} from "../../models/commodity";
import {ProduceDetailsPage} from "../produce-details/produce-details";
import {NgForm} from "@angular/forms";
import {MyProducePage} from "../my-produce/my-produce";
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

  constructor(public navCtrl: NavController, public navParams: NavParams , public commodityService : CommodityProvider,public viewCtrl:ViewController,public alertCtrl:AlertController) {
    this.commodity = navParams.get('commodity');
    console.log(this.commodity);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditcommodityPage');
  }
   onUpdate(data){
  this.commodityService.updateCommodity(
    this.commodity.id,
  data.value.product,
  data.value.description,
  data.value.price,
  data.value.quantity,
  data.value.metric)
.subscribe(
() =>{

  let alert = this.alertCtrl.create({
    title: 'Commodity Updated!',

    buttons: [

      {
        text: 'Ok',
        handler: () => {



          console.log('ok clicked');
        }
      }
    ]
  });
  alert.present();

}
);
     this.navCtrl
       .push(MyProducePage)
       .then(() => {

         const index = this.viewCtrl.index;

         for(let i = index; i > 0; i--){
           this.navCtrl.remove(i);
         }

       });
  data.reset();
}

}
