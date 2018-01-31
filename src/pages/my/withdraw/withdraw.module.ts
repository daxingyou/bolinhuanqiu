import {NgModule} from "@angular/core";
import {WithdrawPage} from "./withdraw";
import {IonicPageModule} from "ionic-angular";
@NgModule({
  declarations:[WithdrawPage],
  imports:[
    IonicPageModule.forChild(WithdrawPage)
  ],
  exports:[WithdrawPage]
})

export class WithdrawModule{

}
