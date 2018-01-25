import {Component} from "@angular/core";
import {IonicPage, NavController} from "ionic-angular";
@IonicPage({
  name: 'MorePage',
  segment: 'MorePage'
})

@Component({
  selector: 'page-more',
  templateUrl: 'more.html'
})

export class MorePage {

  constructor(public navCtrl: NavController) {


  }
  inforDetail(){
    this.navCtrl.push("InfordetailPage");
  }




}
