import {Component} from "@angular/core";
import {IonicPage, NavController,LoadingController} from "ionic-angular";
@IonicPage({
  name:'HistorydealPage',
  segment:'HistorydealPage'
})

@Component({
  selector: 'page-historydeal',
  templateUrl: 'historydeal.html'
})


export class HistorydealPage {
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
