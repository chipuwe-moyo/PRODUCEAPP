import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import { HomePage } from '../home/home';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../app/auth.service";
import {ChangepersonalsPage} from "../changepersonals/changepersonals";

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

loading=false;


  constructor(public navCtrl: NavController, public navParams: NavParams, private authService : AuthService,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


onLogin(form: NgForm){
    this.loading =true;
    this.authService.login(form.value.username, form.value.password)
      .subscribe(
        tokenData=>{ console.log(tokenData);
          let alert = this.alertCtrl.create({
            title: 'Logged in!!',

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
          this.navCtrl.setRoot(HomePage);
           form.reset();


        },
        error  => {
          console.log(error);
          let alert = this.alertCtrl.create({
            title: 'Wrong Credentials!',

            buttons: [

              {
                text: 'OK',
                handler: () => {



                  console.log('ok clicked');
                }
              }
            ]
          });
          alert.present();

        }

             // this.navCtrl.setRoot(HomePage);

       );

 //
   }




}

