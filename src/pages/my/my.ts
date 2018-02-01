import {Component} from "@angular/core";
import {IonicPage, NavController} from "ionic-angular";
import {CommonService} from "../../providers/CommonService";
import {CommonToast} from "../../providers/CommonToas";
import {StorageService} from "../../providers/StorageService";
@IonicPage({
  name: 'MyPage',
  segment: 'MyPage'
})
@Component({
  selector: './page-my',
  templateUrl: 'my.html',
  providers: [CommonService, CommonToast,StorageService]
})

export class MyPage {
  token;
  constructor(public navCtrl: NavController,
              private commonService: CommonService,
              private CommonToast: CommonToast,
              private storage: StorageService,
  ) {
    this.token = this.storage.read("token");

  }

  /**
   * 注销登录
   */
  goOut(){
    let param = {
      _TOKEN:this.token
    };
    this.commonService.getResult('Auth/logout', param).then(res => {
      if (res.code == 0) {
        this.CommonToast.myToast(res.msg);
        this.navCtrl.push('LoginPage');
      } else {
        this.CommonToast.myToast(res.msg);
      }
    })
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


