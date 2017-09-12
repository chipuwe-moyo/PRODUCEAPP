import { Component } from '@angular/core';
import {LoginPage} from '../login/login';
import {DashboardPage} from '../dashboard/dashboard';
import {ProducePage} from'../produce/produce';
import {FarmersPage} from'../farmers/farmers';
import {SettingsPage} from "../settings/settings";


import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor( public navCtrl: NavController) {


  }


  goToFarmer(){

      this.navCtrl.push(FarmersPage);

   }

  goToDashboard(){

   	this.navCtrl.push(DashboardPage);
   }

  goToProduce(){

   	this.navCtrl.push(ProducePage);
   }
  goToSettings(){

   	this.navCtrl.push(SettingsPage);
   }

}
