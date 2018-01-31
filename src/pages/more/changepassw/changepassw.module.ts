import {NgModule} from "@angular/core";
import {ChangepasswPage} from "./changepassw";
import {IonicPageModule} from "ionic-angular";
@NgModule({
  declarations:[ChangepasswPage],
  imports:[
    IonicPageModule.forChild(ChangepasswPage)
  ],
  exports:[ChangepasswPage]
})

export class ChangepasswModule{

}
