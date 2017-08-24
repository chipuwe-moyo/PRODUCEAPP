import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SidemenuPage} from '../sidemenu/sidemenu';
import { MenuController } from 'ionic-angular';
import {MyProducePage} from "../my-produce/my-produce";
import {MyInterestPage} from "../my-interest/my-interest";
import {PersonalSettingsPage} from "../personal-settings/personal-settings";
import {HomePage} from "../home/home";
/**
 * Generated class for the DashboardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  constructor(public navCtrl: NavController,public menuCtrl: MenuController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

   openMenu() {
   this.menuCtrl.open();
 }

 closeMenu() {
   this.menuCtrl.close();
 }

 toggleMenu() {
   this.menuCtrl.toggle();
 }

 goToHome(){

    this.navCtrl.push(HomePage);
 }
  goToMyproduce(){

    this.navCtrl.push(MyProducePage);
   }

  goToInterests(){

  this.navCtrl.push(MyInterestPage);
}

  goToPersonalsettings(){

this.navCtrl.push(PersonalSettingsPage);  }
}
