import {Component} from "@angular/core";
import {IonicPage,ViewController} from "ionic-angular";

@IonicPage({
  name:'MyWarnModal',
  segment:'MyWarnModal'
})

@Component({
  selector: 'page-modal',
  templateUrl: '../template/MyWarnModal.html',
})
export class MyWarnModal {
  constructor(private viewCtrl:ViewController) {
  }
  sure(){
    this.viewCtrl.dismiss();
  }

}
