import {Component} from "@angular/core";
import {IonicPage, NavController, LoadingController} from "ionic-angular";

@IonicPage({
  name: 'DealPage',
  segment: 'DealPage'
})
@Component({
  selector: './page-deal',
  templateUrl: 'deal.html'
})

export class DealPage {
  infoArray = ["base_0", "base_1"];
  info = this.infoArray[0];
  constructor(public navCtrl: NavController,
              public LoadCtrl: LoadingController) {

  }

  addDel(){
    this.navCtrl.push('AdddelPage');
  }

}


