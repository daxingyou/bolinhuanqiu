import {Component} from "@angular/core";
import {IonicPage, NavController, LoadingController} from "ionic-angular";

@IonicPage({
  name: 'HomePage',
  segment: 'HomePage'
})
@Component({
  selector: './page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  infoArray = ["base_0", "base_1"];
  info = this.infoArray[0];
  constructor(public navCtrl: NavController,
              public LoadCtrl: LoadingController) {

  }

  addDel(){
    this.navCtrl.push('AdddelPage');
  }

}


