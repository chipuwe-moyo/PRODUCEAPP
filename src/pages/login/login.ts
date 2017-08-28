import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../app/auth.service";

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




  constructor(public navCtrl: NavController, public navParams: NavParams, private authService : AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


onLogin(form: NgForm){
    this.authService.login(form.value.username, form.value.password)
      .subscribe(result =>{
        if(result===true){
          this.navCtrl.setRoot(HomePage);
        }else {

          alert('make sure that your credentials are correct');
        }
      });


   }
}

