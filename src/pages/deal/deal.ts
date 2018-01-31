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
  goDealdetail(){
    this.navCtrl.push('DealdetailPage');
  }



}
