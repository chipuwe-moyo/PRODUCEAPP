import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {CommodityProvider} from "../../providers/commodity/commodity";
import {NgForm} from "@angular/forms";
import {MyProducePage} from "../my-produce/my-produce";
import {Transfer} from "@ionic-native/transfer";
import {FilePath} from "@ionic-native/file-path";

/**
 * Generated class for the AdditionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-addition',
  templateUrl: 'addition.html',
})
export class AdditionPage {



  constructor(public navCtrl: NavController, public navParams: NavParams,public commodityService:CommodityProvider, private transfer: Transfer, private filePath: FilePath,public viewCtrl:ViewController,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdditionPage');
  }

  add(form: NgForm){
    this.commodityService.addCommodity(
      form.value.product,
      form.value.description,
      form.value.price,
      form.value.quantity,
      form.value.metric,
      form.value.town,
      form.value.province,
      form.value.country,
      form.value.photo,
    )
      .subscribe(
        () => {

          let alert = this.alertCtrl.create({
            title: 'Commodity successfuly created!!',

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
        ,
        error  => {
          console.log(error);
          let alert = this.alertCtrl.create({
            title: 'Error:failed to add commodity',

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


      );
    this.navCtrl.push(MyProducePage)
             .then(() => {

          const index = this.viewCtrl.index;

          for(let i = index; i > 0; i--){
            this.navCtrl.remove(i);
          }

      });

    form.reset();
}}
