import {NgModule} from "@angular/core";
import {RaisequestionPage} from "./raisequestion";
import {IonicPageModule} from "ionic-angular";
@NgModule({
  declarations:[RaisequestionPage],
  imports:[
    IonicPageModule.forChild(RaisequestionPage)
  ],
  exports:[RaisequestionPage]
})

export class RaisequestionModule{

}
