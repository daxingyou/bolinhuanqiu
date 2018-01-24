import {Component} from "@angular/core";
import {IonicPage, NavController, LoadingController} from "ionic-angular";
@IonicPage({
  name: 'AccountPage',
  segment: 'AccountPage'
})
@Component({
  selector: './page-account',
  templateUrl: 'account.html'
})

export class AccountPage {
  items = [];
  itemx =[];
  constructor(public navCtrl: NavController,
              public LoadCtrl: LoadingController
  ) {
    this.items = [
      {id: 1, name: "交易账号"},
      {id: 2, name: "姓名"},
      {id: 3, name: "手机"},
      {id: 4, name: "邮箱"},
      {id: 5, name: "注册时间"}
    ];
    this.itemx = [
      {id: 1, name: "通知"},
      {id: 2, name: "历史订单"},
      {id: 3, name: "挂单列表"},
      {id: 4, name: "开通实盘用户"}
    ];

  }


}


