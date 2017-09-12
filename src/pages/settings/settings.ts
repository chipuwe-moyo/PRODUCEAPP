import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PersonalSettingsPage} from "../personal-settings/personal-settings";
import {AboutPage} from "../about/about";
import {LoginPage} from "../login/login";
import {StartPage} from "../start/start";
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {


  constructor(public navCtrl: NavController) {

  }
  goToPersonalSettings(){


    this.navCtrl.push(PersonalSettingsPage);
  }

  goToAbout(){


    this.navCtrl.push(AboutPage);
  }


  goToLogin(){

    this.navCtrl.setRoot(StartPage);
  }
}


