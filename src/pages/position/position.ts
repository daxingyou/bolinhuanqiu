import {Component} from "@angular/core";
import {IonicPage, NavController,LoadingController} from "ionic-angular";
@IonicPage({
  name:'PositionPage',
  segment:'PositionPage'
})

@Component({
  selector: 'page-position',
  templateUrl: 'position.html'
})


export class PositionPage {
  constructor(public navCtrl: NavController,
              public LoadCtrl: LoadingController
  ) {



  }



}
