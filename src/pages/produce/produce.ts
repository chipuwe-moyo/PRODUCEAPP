import { Component, OnInit } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {CommodityProvider} from "../../providers/commodity/commodity";
import {commodity} from '../../models/commodity';
import {ProduceDetailsPage} from "../produce-details/produce-details";
import {CommoditydetailsPage} from "../commoditydetails/commoditydetails";
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
export class ProducePage implements OnInit {


id: number;
  commodities:commodity[]
  orgcommodities: commodity[]
  ngOnInit(){
    this.commodityService.getCommodity().subscribe((commodities: commodity[]) => {
      this.commodities = commodities;
    });


  }





  constructor(public navCtrl: NavController, public navParams: NavParams,public commodityService: CommodityProvider,public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProducePage');
  }



  goToDetails(id: number) {
    this.navCtrl.push(CommoditydetailsPage, {id});
  }

  search(searchEvent) {
    let query = searchEvent.target.value
    // We will only perform the search if we have 3 or more characters
    if (query.trim() === '' || query.trim().length < 4) {
      // Load cached users
      this.commodities = this.orgcommodities;
    } else {
      //Get the searched users from github
      this.commodityService.search(query).subscribe(commodities => {
        this.commodities = commodities
      },
        error2 => {

        console.log('no results');
          let alert = this.alertCtrl.create({
            title: 'no results!',

            buttons: [

              {
                text: 'OK',
                handler: () => {



                  console.log('ok clicked');
                }
              }
            ]
          });
          alert.present();
          this.navCtrl.pop(ProducePage);
          searchEvent.reset();
        }


      );

    }



  }

}
