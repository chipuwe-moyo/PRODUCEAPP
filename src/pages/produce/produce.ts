import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { CommodityProvider } from '../providers/commodity/commodity';
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
export class ProducePage {






  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProducePage');
  }




}
