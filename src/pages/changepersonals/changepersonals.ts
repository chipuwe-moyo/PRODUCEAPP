import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {UserProvider} from "../../providers/user/user";

/**
 * Generated class for the ChangepersonalsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-changepersonals',
  templateUrl: 'changepersonals.html',
})
export class ChangepersonalsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public userService:UserProvider,public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangepersonalsPage');
  }
  onreset(data){
    this.userService.resetemail(

      data.value.email,

    )   .subscribe(
      () =>{

        let alert = this.alertCtrl.create({
          title: 'Reset link sent to your emaill',

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

      }
    );

  }
}
