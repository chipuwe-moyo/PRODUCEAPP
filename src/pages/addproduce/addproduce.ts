import { Component ,OnInit,Input} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http, Headers,RequestOptions} from '@angular/http';
import {NgForm} from "@angular/forms";
import {MyProducePage} from "../my-produce/my-produce";
import { CommodityProvider } from '../../providers/commodity/commodity';

/**
 * Generated class for the AddproducePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-addproduce',
  templateUrl: 'addproduce.html',
})
export class AddproducePage implements OnInit{


  ngOnInit() {
  }


  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,public commodityService: CommodityProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddproducePage');
  }

  postRequest(form: NgForm){
    this.commodityService.addCommodity(
      form.value.product,
      form.value.description,
      form.value.price,
      form.value.quantity,
      form.value.metric,
      form.value.town,
      form.value.province,
      form.value.country
    )
      .subscribe(
        () => alert("Commodity Created")
      );
    this.navCtrl.push(MyProducePage);
    form.reset();
  }


}
