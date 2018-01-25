import {Component} from "@angular/core";
import {IonicPage, NavController, LoadingController} from "ionic-angular";
@IonicPage({
  name: 'RecomregisterPage',
  segment: 'RecomregisterPage'
})
@Component({
  selector: './page-recomregister',
  templateUrl: 'recomregister.html'
})

export class RecomregisterPage {
  items = [];
  itemx =[];
  constructor(public navCtrl: NavController,
              public LoadCtrl: LoadingController
  ) {


  }


}


