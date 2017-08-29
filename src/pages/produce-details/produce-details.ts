import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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


  product:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.product = navParams.get('product');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProduceDetailsPage');
  }

}
