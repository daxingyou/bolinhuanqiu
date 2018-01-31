import {Component} from "@angular/core";
import {IonicPage, NavController, LoadingController,ModalController} from "ionic-angular";
@IonicPage({
  name: 'DealdetailPage',
  segment: 'DealdetailPage'
})
@Component({
  selector: './page-dealdetail',
  templateUrl: 'dealdetail.html'
})

export class DealdetailPage {
  MyModalSuccesssett;
  constructor(public navCtrl: NavController,
              public LoadCtrl: LoadingController,
              private myModal: ModalController,
  ) {


  }
  goBack() {
    this.navCtrl.pop();
  }
  goSetting(){
    this.MyModalSuccesssett=this.myModal.create('MySettModal');
    this.MyModalSuccesssett.present();
  }


}


