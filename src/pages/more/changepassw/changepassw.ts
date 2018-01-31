import {Component} from "@angular/core";
import {IonicPage, NavController, LoadingController} from "ionic-angular";
@IonicPage({
  name: 'ChangepasswPage',
  segment: 'ChangepasswPage'
})
@Component({
  selector: './page-changepassw',
  templateUrl: 'changepassw.html'
})

export class ChangepasswPage {
  constructor(public navCtrl: NavController,
              public LoadCtrl: LoadingController
  ) {


  }
  goBack() {
    this.navCtrl.pop();
  }

}


