import {Component} from "@angular/core";
import {IonicPage, NavController, LoadingController} from "ionic-angular";
@IonicPage({
  name: 'MyPage',
  segment: 'MyPage'
})
@Component({
  selector: './page-my',
  templateUrl: 'my.html'
})

export class MyPage {
  constructor(public navCtrl: NavController,
              public LoadCtrl: LoadingController
  ) {


  }
  goRecharge(){
    this.navCtrl.push('RechargePage');
  }
  goWithdraw(){
    this.navCtrl.push('WithdrawPage');
  }
  goHistorydeal(){
    this.navCtrl.push('HistorydealPage');
  }
  goChargerecord(){
    this.navCtrl.push('ChargerecordPage');
  }
  goWithdrawrecord(){
    this.navCtrl.push('WithdrawrecordPage');
  }
  goMoneyrecord(){
    this.navCtrl.push('MoneyrecordPage');
  }



}


