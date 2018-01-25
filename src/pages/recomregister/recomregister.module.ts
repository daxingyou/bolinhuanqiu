import {NgModule} from "@angular/core";
import {RecomregisterPage} from "./recomregister";
import {IonicPageModule} from "ionic-angular";
@NgModule({
  declarations:[RecomregisterPage],
  imports:[
    IonicPageModule.forChild(RecomregisterPage)
  ],
  exports:[RecomregisterPage]
})

export class RecomregisterModule{

}
