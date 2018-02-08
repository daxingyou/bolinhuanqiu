import {NgModule} from "@angular/core";
import {ServicePage} from "./service";
import {IonicPageModule} from "ionic-angular";
@NgModule({
  declarations:[ServicePage],
  imports:[
    IonicPageModule.forChild(ServicePage)
  ],
  exports:[ServicePage]
})

export class ServiceModule{

}
