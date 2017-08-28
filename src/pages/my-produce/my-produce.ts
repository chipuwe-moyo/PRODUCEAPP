import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AddproducePage} from "../addproduce/addproduce";


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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyProducePage');
  }
  addproduce(){

    this.navCtrl.push(AddproducePage);
  }
}
