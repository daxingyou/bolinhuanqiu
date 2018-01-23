import {NgModule} from "@angular/core";
import {AccountPage} from "./account";
import {IonicPageModule} from "ionic-angular";
@NgModule({
  declarations:[AccountPage],
  imports:[
    IonicPageModule.forChild(AccountPage)
  ],
  exports:[AccountPage]
})

export class AccountModule{

}
