import {NgModule} from "@angular/core";
import {MySettModal} from "./MySettModal";
import {IonicPageModule} from "ionic-angular";
@NgModule({
  declarations:[MySettModal],
  imports:[
    IonicPageModule.forChild(MySettModal)
  ],
  exports:[MySettModal]
})

export class MySettModalModule{

}
