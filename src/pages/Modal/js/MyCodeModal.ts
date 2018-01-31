import {Component} from "@angular/core";
import {IonicPage,ViewController} from "ionic-angular";

@IonicPage({
  name:'MyCodeModal',
  segment:'MyCodeModal'
})

@Component({
  selector: 'page-modal',
  templateUrl: '../template/MyCodeModal.html',
})
export class MyCodeModal {
  constructor(private viewCtrl:ViewController) {
  }
  sure(){
    this.viewCtrl.dismiss();
  }

}
