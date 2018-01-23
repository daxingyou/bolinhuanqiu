import {Component} from "@angular/core";
import {IonicPage, NavController} from "ionic-angular";
@IonicPage({
  name: 'FinancePage',
  segment: 'FinancePage'
})

@Component({
  selector: 'page-finance',
  templateUrl: 'finance.html'
})

export class FinancePage {

  constructor(public navCtrl: NavController) {


    // this.items = [
    //   {id: 1, name: "我的课程", icon: "assets/img/kecheng.png"},
    //   {id: 2, name: "我的资料", icon: "assets/img/ziliao.png"},
    //   {id: 3, name: "我的会员卡", icon: "assets/img/yue.png"},
    //   // {id: 7, name: "我的会员卡", icon: "assets/img/huiyuan.png"},
    //   {id: 4, name: "用户成就", icon: "assets/img/huiyuan.png"},
    //   {id: 5, name: "我的卡券", icon: "assets/img/youhuiquan.png"},
    //   {id: 6, name: "套餐购买", icon: "assets/img/goumai.png"},
    // ];

  }

  // ionViewDidEnter() {
  //   let loading = this.loadCtrl.create({});
  //   loading.present();
  //   setTimeout(() => {
  //
  //     setTimeout(() => {
  //       loading.dismiss();
  //     }, 500);
  //   });
  //
  // }


  itemSelected(id) {
    switch (id) {
      case 1:
        this.navCtrl.push('CoursePage');
        break;
      case 2:
        this.navCtrl.push('InformationPage');
        break;
      case 3:
        this.navCtrl.push('RemoneyPage');
        break;
      case 4:
        // this.navCtrl.push('CardPage');
        this.navCtrl.push('AchievePage');
        break;
      case 5:
        this.navCtrl.push('CouponsPage', {couponsList: 0});
        break;
      case 6:
        this.navCtrl.push('BuyclassPage');
        break;
      // case 7:
      //   this.navCtrl.push('CardPage');
      //   break;
    }
  }


}
