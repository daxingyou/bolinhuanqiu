import {Component} from "@angular/core";
import {IonicPage, NavController, LoadingController} from "ionic-angular";
@IonicPage({
  name: 'LoginPage',
  segment: 'LoginPage'
})
@Component({
  selector: './page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
  constructor(public navCtrl: NavController,
              public LoadCtrl: LoadingController
  ) {


  }
  register(){
    this.navCtrl.push('RegisterPage');
  }
  homePage(){
    this.navCtrl.push('HomePage');
  }


}


