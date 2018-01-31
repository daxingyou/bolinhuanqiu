import {Component} from "@angular/core";
import {IonicPage, NavController, LoadingController} from "ionic-angular";
@IonicPage({
  name: 'RegisterPage',
  segment: 'RegisterPage'
})
@Component({
  selector: './page-register',
  templateUrl: 'register.html'
})

export class RegisterPage {
  constructor(public navCtrl: NavController,
              public LoadCtrl: LoadingController
  ) {


  }
  login(){
    this.navCtrl.push('LoginPage');
  }


}


