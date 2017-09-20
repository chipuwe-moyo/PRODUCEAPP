import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ChangepersonalsPage} from "../changepersonals/changepersonals";
import {ResetinfoPage} from "../resetinfo/resetinfo";
import {UserProvider} from "../../providers/user/user";

/**
 * Generated class for the PersonalSettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-personal-settings',
  templateUrl: 'personal-settings.html',
})
export class PersonalSettingsPage implements OnInit{

user: any;
id:number;
  ngOnInit() {
    this.userService.getUserInfo(this.id).subscribe(user => {
      this.user = user;
      console.log(user);


    })
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,public userService:UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalSettingsPage');
  }
change(user){
this.navCtrl.push(ResetinfoPage,{user:user});

}
}
