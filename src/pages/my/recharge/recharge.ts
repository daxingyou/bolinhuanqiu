import {Component} from "@angular/core";
import {IonicPage, NavController, LoadingController} from "ionic-angular";
@IonicPage({
  name: 'RechargePage',
  segment: 'RechargePage'
})
@Component({
  selector: './page-recharge',
  templateUrl: 'recharge.html'
})

export class RechargePage {
  constructor(public navCtrl: NavController,
              public LoadCtrl: LoadingController
  ) {


  }
  goBack() {
    this.navCtrl.pop();
  }


}


