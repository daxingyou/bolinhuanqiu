import {Component} from "@angular/core";
import {IonicPage, NavController,LoadingController} from "ionic-angular";
@IonicPage({
  name:'AdddelPage',
  segment:'AdddelPage'
})

@Component({
  selector: 'page-adddel',
  templateUrl: 'adddel.html'
})


export class AdddelPage {
  constructor(public navCtrl: NavController,
              public LoadCtrl: LoadingController
  ) {



  }



}
