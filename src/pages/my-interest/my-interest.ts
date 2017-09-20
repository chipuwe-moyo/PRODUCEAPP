import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AuthService} from "../../app/auth.service";
import {UserProvider} from "../../providers/user/user";
import {CommodityProvider} from "../../providers/commodity/commodity";
import {commodity} from "../../models/commodity";
import {notification} from "../../models/notification";
import {MynotificationPage} from "../mynotification/mynotification";
/**
 * Generated class for the MyInterestPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-my-interest',
  templateUrl: 'my-interest.html',
})
export class MyInterestPage implements OnInit{
  notifications: Notification[];
  commodity: commodity;

  ngOnInit() {
   // this.notification = this.userService.notification;

    this.userService.getNotifications()
      .subscribe(
        (likes: Notification[]) => this.notifications = likes,
        (error: Response) =>console.log(error)
      );
  }


  constructor(public navCtrl: NavController, public navParams: NavParams,public authservice: AuthService,public userService: UserProvider,public commodityService:CommodityProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyInterestPage');
  }

  getmyNotification(notification){
    this.userService.notification = notification;
    this.navCtrl.push(MynotificationPage);
}
}
