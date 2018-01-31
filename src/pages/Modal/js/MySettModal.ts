import {Component} from "@angular/core";
import {IonicPage,ViewController} from "ionic-angular";

@IonicPage({
  name:'MySettModal',
  segment:'MySettModal'
})

@Component({
  selector: 'page-modal',
  templateUrl: '../template/MySettModal.html',
})
export class MySettModal {
  constructor(private viewCtrl:ViewController) {
  }
  sure(){
    this.viewCtrl.dismiss();
  }

}
