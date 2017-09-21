import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AddproducePage} from "../addproduce/addproduce";
import {CommodityProvider} from "../../providers/commodity/commodity";
import {commodity} from '../../models/commodity';
import {ProduceDetailsPage} from "../produce-details/produce-details";
import {AdditionPage} from "../addition/addition";


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
  query: string;
  commodities: commodity[]
  orgcommodities: commodity[]

  ngOnInit() {
    this.commodityService.getMyCommodities().subscribe((commodities: commodity[]) => {
      this.commodities = commodities;
    });


  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public commodityService: CommodityProvider) {
    this.orgcommodities = this.commodities;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyProducePage');
  }

  addproduce() {
    this.navCtrl.push(AdditionPage);
  }

  goToDetails(id: number) {
    this.navCtrl.push(ProduceDetailsPage, {id});
  }

  search(searchEvent) {
    let query = searchEvent.target.value
    // We will only perform the search if we have 3 or more characters
    if (query.trim() === '' || query.trim().length < 4) {
      // Load cached commodities
      this.commodities = this.orgcommodities;
    } else {
      //Get the searched commodities from backend
      this.commodityService.search(query).subscribe(commodities => {
        this.commodities = commodities
      });

    }


  }
}
