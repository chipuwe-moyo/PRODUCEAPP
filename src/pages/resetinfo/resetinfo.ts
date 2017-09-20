import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {AuthService} from "../../app/auth.service";
import {PersonalSettingsPage} from "../personal-settings/personal-settings";
import {UserProvider} from "../../providers/user/user";

/**
 * Generated class for the ResetinfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-resetinfo',
  templateUrl: 'resetinfo.html',
})
export class ResetinfoPage implements OnInit{


  ngOnInit(){
    this.userService.getUserInfo(this.id).subscribe(user => {
      this.user = user;
      console.log(user);


    })



  }
 id:number;
  user:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public authService:AuthService,public alertCtrl: AlertController,public viewCtrl:ViewController,public userService:UserProvider) {
    this.user = navParams.get('user');
    console.log(this.user);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetinfoPage');
  }

  onUpdate(data){
    this.userService.updateInfo(
      this.user.id,
      data.value.username,
      data.value.password,
      data.value.street_address,
      data.value.city,
      data.value.province,
      data.value.country,
      data.value.email,
      data.value.phone_number)
      .subscribe(
      () =>{

        let alert = this.alertCtrl.create({
          title: 'Personal Details updated',

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
    this.navCtrl
      .push(PersonalSettingsPage)
      .then(() => {

        const index = this.viewCtrl.index;

        for(let i = index; i > 0; i--){
          this.navCtrl.remove(i);
        }

      });
    data.reset();
  }
}
