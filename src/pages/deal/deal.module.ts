import {NgModule} from "@angular/core";
import {DealPage} from "./deal";
import {IonicPageModule} from "ionic-angular";
@NgModule({
  declarations:[DealPage],
  imports:[
    IonicPageModule.forChild(DealPage)
  ],
  exports:[DealPage]
})

export class DealModule{

}
