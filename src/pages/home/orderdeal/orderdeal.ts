import {Component} from "@angular/core";
import {IonicPage, NavController, LoadingController,ModalController} from "ionic-angular";
@IonicPage({
  name: 'OrderdealPage',
  segment: 'OrderdealPage'
})
@Component({
  selector: './page-orderdeal',
  templateUrl: 'orderdeal.html'
})

export class OrderdealPage {
  MyModalSuccessWarn;
  constructor(public navCtrl: NavController,
              public LoadCtrl: LoadingController,
              private myModal: ModalController
  ) {


  }
  goBack() {
    this.navCtrl.pop();
  }
  goRecharge(){
    this.navCtrl.push('RechargePage');
  }
  sureOrder(){
    this.MyModalSuccessWarn=this.myModal.create('MyWarnModal');
    this.MyModalSuccessWarn.present();
  }


}


