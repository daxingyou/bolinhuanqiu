import {NgModule} from "@angular/core";
import {PositionPage} from "./position";
import {IonicPageModule} from "ionic-angular";
@NgModule({
  declarations:[PositionPage],
  imports:[
    IonicPageModule.forChild(PositionPage)
  ],
  exports:[PositionPage]
})

export class PositionModule{

}
