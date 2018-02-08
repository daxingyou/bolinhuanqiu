import {Component} from "@angular/core";
import {IonicPage, NavController, LoadingController} from "ionic-angular";
@IonicPage({
  name: 'RaisequestionPage',
  segment: 'RaisequestionPage'
})
@Component({
  selector: './page-raisequestion',
  templateUrl: 'raisequestion.html'
})

export class RaisequestionPage {
  constructor(public navCtrl: NavController,
              public LoadCtrl: LoadingController
  ) {


  }
  goBack() {
    this.navCtrl.pop();
  }


}


