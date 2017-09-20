import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {AuthService} from "../../app/auth.service";
import { UserProvider } from '../../providers/user/user';
import {AddproducePage} from "../addproduce/addproduce";
import {NgForm} from "@angular/forms";
import {commodity} from '../../models/commodity';
import{notification} from'../../models/notification';
import {CommodityProvider} from "../../providers/commodity/commodity";
import {ProducePage} from "../produce/produce";
/**
 * Generated class for the NotificationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage implements OnInit {

  commodity: commodity;
  id:number;

  ngOnInit(){
    this.id = this.navParams.get('id');
    this.commodityService.getCommodityInfo(this.id).subscribe(commodity => {
      this.commodity = commodity;
      console.log(commodity);


    })
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,public authService : AuthService,public userService: UserProvider, public commodityService:CommodityProvider,public alertCtrl:AlertController, public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationPage');
  }
  onNotify(form: NgForm) {
    this.userService.notifyUser(this.commodity.id, form.value.message, form.value.recipient)
      .subscribe(

        ()=>{
          let alert = this.alertCtrl.create({
            title: this.commodity.user_id + " has been notified on " + this.commodity.product,

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
          this.navCtrl.push(ProducePage) .then(() => {

            const index = this.viewCtrl.index;

            for(let i = index; i > 0; i--){
              this.navCtrl.remove(i);
            }

          });
          form.reset();



        }
      );
  }
}
