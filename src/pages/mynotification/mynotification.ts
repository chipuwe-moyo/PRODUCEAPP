import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {UserProvider} from "../../providers/user/user";
import {commodity} from "../../models/commodity";
import {CommodityProvider} from "../../providers/commodity/commodity";
import {NgForm} from "@angular/forms";
import {NotificationPage} from "../notification/notification";
import {FavoritesPage} from "../favorites/favorites";
import {MyInterestPage} from "../my-interest/my-interest";

/**
 * Generated class for the MynotificationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-mynotification',
  templateUrl: 'mynotification.html',
})
export class MynotificationPage implements  OnInit{

  notification: any;
  commodity:commodity;

  ngOnInit(){

  this.notification = this.userService.notification;
    this.commodityService.getCommodityInfo(this.notification.data.commodity_id)
      .subscribe(commodity => this.commodity = commodity);
}


  constructor(public navCtrl: NavController, public navParams: NavParams,public userService: UserProvider,public commodityService: CommodityProvider, public alertCtrl: AlertController,public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MynotificationPage');
  }
  onNotify(form: NgForm) {
    this.userService.notifyUser(this.commodity.id, form.value.message, form.value.recipient)
      .subscribe(

        ()=>{

          let alert = this.alertCtrl.create({
            title:this.notification.data.user_id + " has been notified on " + this.commodity.product,

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
          this.navCtrl.push(MyInterestPage) .then(() => {

            const index = this.viewCtrl.index;

            for(let i = index; i > 0; i--){
              this.navCtrl.remove(i);
            }

          });




        }

      );
  }
}
