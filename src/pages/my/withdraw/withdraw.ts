import {Component} from "@angular/core";
import {IonicPage, NavController, LoadingController} from "ionic-angular";
import {CommonService} from "../../../providers/CommonService";
import {CommonToast} from "../../../providers/CommonToas";
import {StorageService} from "../../../providers/StorageService";
@IonicPage({
  name: 'WithdrawPage',
  segment: 'WithdrawPage'
})
@Component({
  selector: './page-withdraw',
  templateUrl: 'withdraw.html',
  providers: [CommonService, CommonToast,StorageService]
})

export class WithdrawPage {
  token;
  infor={
    amount:'',
    bank_card:'',
    name:'',
    bank_name:'',
    bank_city:'',
    bank_branch:''
  };
  constructor(public navCtrl: NavController,
              private commonService: CommonService,
              private CommonToast: CommonToast,
              private storage: StorageService,
              public LoadCtrl: LoadingController,
  ) {
    this.token = this.storage.read("token");
  }
  getWithdraw(){
    let param = {
      _TOKEN:this.token,
      amount:this.infor.amount,
      bank_card:this.infor.bank_card,
      name:this.infor.name,
      bank_name:this.infor.bank_name,
      bank_city:this.infor.bank_city,
      bank_branch:this.infor.bank_branch
    };
    this.commonService.getResult('Transfer/save', param).then(res => {
      if (res.code == 0) {
        this.CommonToast.myToast(res.msg);
        this.navCtrl.push('MyPage');
      } else {
        this.CommonToast.myToast(res.msg);
      }
    })
  }
  goBack() {
    this.navCtrl.pop();
  }


}


