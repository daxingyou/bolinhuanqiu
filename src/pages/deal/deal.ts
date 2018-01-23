import {Component} from "@angular/core";
import {IonicPage, NavController, LoadingController} from "ionic-angular";

@IonicPage({
  name: 'DealPage',
  segment: 'DealPage'
})
@Component({
  selector: './page-deal',
  templateUrl: 'deal.html'
})

export class DealPage {
  infoArray = ["base_0", "base_1"];
  info = this.infoArray[0];
  constructor(public navCtrl: NavController,
              public LoadCtrl: LoadingController) {
  }


  // ionViewDidEnter() {
  //   this.loading = this.LoadCtrl.create({});
  //   this.loading.present();
  //   setTimeout(() => {
  //     this.getList(this.data);
  //     this.banner();
  //   });
  //
  // }



}


