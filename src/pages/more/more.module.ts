import {NgModule} from "@angular/core";
import {MorePage} from "./more";
import {IonicPageModule} from "ionic-angular";
@NgModule({
  declarations:[MorePage],
  imports:[
    IonicPageModule.forChild(MorePage)
  ],
  exports:[MorePage]
})

export class MoreModule{

}
