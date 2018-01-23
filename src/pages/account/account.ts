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
  constructor(public navCtrl: NavController,
              public LoadCtrl: LoadingController
  ) {

  }

  // ionViewDidEnter() {
  //   this.loading = this.LoadCtrl.create({
  //   });
  //   this.loading.present();
  //   setTimeout(() => {
  //     this.getList(this.data);
  //
  //   });
  // }




}


