import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NgForm} from '@angular/forms';
import {AuthService} from "../../app/auth.service";
import {LoginPage} from "../login/login";
/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage implements OnInit{

  ngOnInit() {
  }

  constructor(public navCtrl: NavController, public navParams: NavParams ,public authService : AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  onRegister(form: NgForm) {
    this.authService.register(
      form.value.first_name,
      form.value.last_name,
      form.value.username,
      form.value.password,
      form.value.street_address,
      form.value.city,
      form.value.province,
      form.value.country,
      form.value.email,
      form.value.phone_number)
      .subscribe(
        () => {
          this.authService.login(
            form.value.username,
            form.value.password)
            .subscribe(
              () => {this.navCtrl.pop(LoginPage);}
            );
        },
        error => console.log(error)
      );
    this.navCtrl.pop(LoginPage);
    form.reset();
  }
}
