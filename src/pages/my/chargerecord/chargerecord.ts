import {Component} from "@angular/core";
import {IonicPage, NavController,LoadingController} from "ionic-angular";
@IonicPage({
  name:'ChargerecordPage',
  segment:'ChargerecordPage'
})

@Component({
  selector: 'page-chargerecord',
  templateUrl: 'chargerecord.html'
})


export class ChargerecordPage {
  constructor(public navCtrl: NavController,
              public LoadCtrl: LoadingController
  ) {



  }
  goBack() {
    this.navCtrl.pop();
  }




}
