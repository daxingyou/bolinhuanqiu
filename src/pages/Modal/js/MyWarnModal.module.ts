import {NgModule} from "@angular/core";
import {MyWarnModal} from "./MyWarnModal";
import {IonicPageModule} from "ionic-angular";
@NgModule({
  declarations:[MyWarnModal],
  imports:[
    IonicPageModule.forChild(MyWarnModal)
  ],
  exports:[MyWarnModal]
})

export class MyWarnModalModule{

}
