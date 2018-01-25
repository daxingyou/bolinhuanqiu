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

  itemSelected(id) {
    switch (id) {
      case 1:
        this.navCtrl.push('InformPage');
        break;
      case 2:
        this.navCtrl.push('HistoryorderPage');
        break;
      // case 3:
      //   this.navCtrl.push('RemoneyPage');
      //   break;
      // case 4:
      //   this.navCtrl.push('AchievePage');
      //   break;
    }
  }


}


