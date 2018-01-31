import {Component} from "@angular/core";
import {IonicPage, NavController, LoadingController} from "ionic-angular";
@IonicPage({
  name: 'WithdrawPage',
  segment: 'WithdrawPage'
})
@Component({
  selector: './page-withdraw',
  templateUrl: 'withdraw.html'
})

export class WithdrawPage {
  constructor(public navCtrl: NavController,
              public LoadCtrl: LoadingController
  ) {


  }
  goBack() {
    this.navCtrl.pop();
  }


}


