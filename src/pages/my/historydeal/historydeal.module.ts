import {NgModule} from "@angular/core";
import {HistorydealPage} from "./historydeal";
import {IonicPageModule} from "ionic-angular";
@NgModule({
  declarations:[HistorydealPage],
  imports:[
    IonicPageModule.forChild(HistorydealPage)
  ],
  exports:[HistorydealPage]
})

export class HistorydealModule{

}
