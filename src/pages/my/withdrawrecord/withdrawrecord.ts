import {Component} from "@angular/core";
import {IonicPage, NavController,LoadingController} from "ionic-angular";
@IonicPage({
  name:'WithdrawrecordPage',
  segment:'WithdrawrecordPage'
})

@Component({
  selector: 'page-withdrawrecord',
  templateUrl: 'withdrawrecord.html'
})


export class WithdrawrecordPage {
  constructor(public navCtrl: NavController,
              public LoadCtrl: LoadingController
  ) {



  }
  goBack() {
    this.navCtrl.pop();
  }




}
