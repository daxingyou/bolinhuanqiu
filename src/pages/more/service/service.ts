import {Component} from "@angular/core";
import {IonicPage, NavController, LoadingController} from "ionic-angular";
@IonicPage({
  name: 'ServicePage',
  segment: 'ServicePage'
})
@Component({
  selector: './page-service',
  templateUrl: 'service.html'
})

export class ServicePage {
  constructor(public navCtrl: NavController,
              public LoadCtrl: LoadingController
  ) {


  }
  goBack() {
    this.navCtrl.pop();
  }
  goProblem() {
    this.navCtrl.push('RaisequestionPage');
  }


}


