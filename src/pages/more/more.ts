import {Component} from "@angular/core";
import {IonicPage, NavController,ModalController} from "ionic-angular";
@IonicPage({
  name: 'MorePage',
  segment: 'MorePage'
})

@Component({
  selector: 'page-more',
  templateUrl: 'more.html'
})

export class MorePage {
  MyModalSuccessCode;
  constructor(public navCtrl: NavController,
              private myModal: ModalController,
  ) {


  }
  goHelp(){
    this.navCtrl.push("HelpPage");
  }
  goChangepassw(){
    this.navCtrl.push("ChangepasswPage");
  }
  goCode(){
    this.MyModalSuccessCode=this.myModal.create('MyCodeModal');
    this.MyModalSuccessCode.present();
  }
  goService(){
    this.navCtrl.push("ServicePage");
  }



}
