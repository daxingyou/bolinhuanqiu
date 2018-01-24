import {NgModule} from "@angular/core";
import {AdddelPage} from "./adddel";
import {IonicPageModule} from "ionic-angular";
@NgModule({
  declarations:[AdddelPage],
  imports:[
    IonicPageModule.forChild(AdddelPage)
  ],
  exports:[AdddelPage]
})

export class AdddelModule{

}
