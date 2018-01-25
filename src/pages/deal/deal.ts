import {Component} from "@angular/core";
import {IonicPage, NavController,LoadingController} from "ionic-angular";
@IonicPage({
  name:'DealPage',
  segment:'DealPage'
})

@Component({
  selector: 'page-deal',
  templateUrl: 'deal.html'
})


export class DealPage {
  constructor(public navCtrl: NavController,
              public LoadCtrl: LoadingController
  ) {



  }
  goBack() {
    this.navCtrl.pop();
  }

  /**
   * 跳转历史订单页
   */
  getHistory(){
    this.navCtrl.push('HistoryorderPage');
  }
  getOrder(){
    this.navCtrl.push('OrderPage');
  }



}
