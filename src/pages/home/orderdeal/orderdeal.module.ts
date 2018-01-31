import {NgModule} from "@angular/core";
import {OrderdealPage} from "./orderdeal";
import {IonicPageModule} from "ionic-angular";
@NgModule({
  declarations:[OrderdealPage],
  imports:[
    IonicPageModule.forChild(OrderdealPage)
  ],
  exports:[OrderdealPage]
})

export class OrderdealModule{

}
