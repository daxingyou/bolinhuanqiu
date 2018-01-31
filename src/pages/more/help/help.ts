import {Component} from "@angular/core";
import {IonicPage, NavController, LoadingController} from "ionic-angular";
@IonicPage({
  name: 'HelpPage',
  segment: 'HelpPage'
})
@Component({
  selector: './page-help',
  templateUrl: 'help.html'
})

export class HelpPage {
  constructor(public navCtrl: NavController,
              public LoadCtrl: LoadingController
  ) {


  }
  goBack() {
    this.navCtrl.pop();
  }

}


