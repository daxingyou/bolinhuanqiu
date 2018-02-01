import {NgModule} from "@angular/core";
import {HistorydetailPage} from "./historydetail";
import {IonicPageModule} from "ionic-angular";
@NgModule({
  declarations:[HistorydetailPage],
  imports:[
    IonicPageModule.forChild(HistorydetailPage)
  ],
  exports:[HistorydetailPage]
})

export class HistorydetailModule{

}
