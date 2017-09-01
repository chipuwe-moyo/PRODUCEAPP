import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http, Headers,RequestOptions} from '@angular/http';
import {NgForm} from "@angular/forms";
import {MyProducePage} from "../my-produce/my-produce";

/**
 * Generated class for the AddproducePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-addproduce',
  templateUrl: 'addproduce.html',
})
export class AddproducePage {
  Product : string;
  Description : string;
  Price: number;
  Metric : string;
  Town : string;
  Province :string;
  Country : string;
  Quantity : string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddproducePage');
  }

  postRequest(f: NgForm){
    var headers= new Headers();
    headers.append("Accept",'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({headers:headers});

    let postParams={
          product: this.Product,
          description :this.Description,
          price : this.Price,
          quantity :  this.Quantity,
            metric : this.Metric,
          town: this.Town,
          province : this.Province,
          country : this.Country

    }
 this.http.post("http://localhost:8000/api/commodity/store",postParams)
   .subscribe(data => {
     console.log(data['_body']);
   },error =>{
     console.log(error);
   });

    this.navCtrl.push(MyProducePage);
  }

}
