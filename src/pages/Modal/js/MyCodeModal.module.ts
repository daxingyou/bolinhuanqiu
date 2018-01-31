import {NgModule} from "@angular/core";
import {MyCodeModal} from "./MyCodeModal";
import {IonicPageModule} from "ionic-angular";
@NgModule({
  declarations:[MyCodeModal],
  imports:[
    IonicPageModule.forChild(MyCodeModal)
  ],
  exports:[MyCodeModal]
})

export class MyCodeModalModule{

}
