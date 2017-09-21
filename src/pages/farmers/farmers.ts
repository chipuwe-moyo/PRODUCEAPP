import { Component ,OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {user} from '../../models/user';
import {FarmersProvider} from "../../providers/farmers/farmers";

/**
 * Generated class for the FarmersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-farmers',
  templateUrl: 'farmers.html',
})
export class FarmersPage implements OnInit{

  users:user[]

  ngOnInit(){
    // this.farmersService.getFarmer().subscribe((users: user[]) => {
    //   this.users = users;
    // });
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,public  farmersService:FarmersProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FarmersPage');
  }

}
