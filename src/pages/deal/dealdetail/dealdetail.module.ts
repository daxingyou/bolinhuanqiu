import {NgModule} from "@angular/core";
import {DealdetailPage} from "./dealdetail";
import {IonicPageModule} from "ionic-angular";
@NgModule({
  declarations:[DealdetailPage],
  imports:[
    IonicPageModule.forChild(DealdetailPage)
  ],
  exports:[DealdetailPage]
})

export class DealdetailModule{

}
