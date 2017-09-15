import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AuthService} from "../../app/auth.service";
import { UserProvider } from '../../providers/user/user';
import {AddproducePage} from "../addproduce/addproduce";
import {NgForm} from "@angular/forms";
import {commodity} from '../../models/commodity';
import{notification} from'../../models/notification';
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
export class NotificationPage {

  commodity: commodity;

  OnInit(){

this.navCtrl.push(AddproducePage);
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,public authService : AuthService,public userService: UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationPage');
  }
  onNotify(form: NgForm) {
    this.userService.notifyUser(this.commodity.id, form.value.message, form.value.recipient)
      .subscribe(
        () => alert(this.commodity.user_id + " has been notified on " + this.commodity.product)
      );
  }
}
