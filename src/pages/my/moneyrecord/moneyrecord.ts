import {Component} from "@angular/core";
import {IonicPage, NavController,LoadingController} from "ionic-angular";
@IonicPage({
  name:'MoneyrecordPage',
  segment:'MoneyrecordPage'
})

@Component({
  selector: 'page-moneyrecord',
  templateUrl: 'moneyrecord.html'
})


export class MoneyrecordPage {
  constructor(public navCtrl: NavController,
              public LoadCtrl: LoadingController
  ) {



  }
  goBack() {
    this.navCtrl.pop();
  }




}
