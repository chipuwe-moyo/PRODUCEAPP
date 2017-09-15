import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CommodityProvider} from "../../providers/commodity/commodity";
import {commodity} from '../../models/commodity';
import {EditcommodityPage} from "../editcommodity/editcommodity";
import {MyProducePage} from "../my-produce/my-produce";
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
  @Output() commodityDeleted = new EventEmitter<commodity>();
  product:string;
  id:number;

  editing = false;
  editProduct;
  editDescription = '';
  editPrice;
  editQuantity;
  editMetric = '';

  ngOnInit(){
    this.id = this.navParams.get('id');
    this.commodityService.getCommodityInfo(this.id).subscribe(commodity => {
      this.commodity = commodity;
console.log(commodity);


    })
  }

  constructor(public navCtrl: NavController, public navParams: NavParams ,private commodityService : CommodityProvider) {


  }




  ondeleted () {
    if (confirm('Are you sure you want to delete this')) {
      this.commodityService.deleteCommodity(this.commodity.id)
        .subscribe(
          () => {
            this.commodityDeleted.emit(this.commodity);
            console.log('Commodity Deleted')
          }


        );
      this.navCtrl.push(MyProducePage);
    }
  }
 //  ondeleted(id) {
 //    alert(id);
 //    this.commodityService.deleteCommodity(id);
 //    /*const position = this.commodity.findIndex(
 //      (commodityEl: commodity) => {
 //        return commodityEl.id == id;
 //      }
 //   );*/
 //    this.commodity.splice(position, 1);
 //    this.navCtrl.push(MyProducePage);
 // }
 //



  ionViewDidLoad() {
    console.log('ionViewDidLoad ProduceDetailsPage');
  }

  edit(commodity){

    this.navCtrl.push(EditcommodityPage, {commodity: commodity});
  }

}
