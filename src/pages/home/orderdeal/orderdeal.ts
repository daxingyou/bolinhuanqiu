import {Component} from "@angular/core";
import {IonicPage, NavController, LoadingController} from "ionic-angular";
@IonicPage({
  name: 'OrderdealPage',
  segment: 'OrderdealPage'
})
@Component({
  selector: './page-orderdeal',
  templateUrl: 'orderdeal.html'
})

export class OrderdealPage {
  constructor(public navCtrl: NavController,
              public LoadCtrl: LoadingController
  ) {


  }
  goBack() {
    this.navCtrl.pop();
  }
  goRecharge(){
    this.navCtrl.push('RechargePage');
  }


}


