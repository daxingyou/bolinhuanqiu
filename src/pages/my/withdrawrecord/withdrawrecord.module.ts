import {NgModule} from "@angular/core";
import {WithdrawrecordPage} from "./withdrawrecord";
import {IonicPageModule} from "ionic-angular";
@NgModule({
  declarations:[WithdrawrecordPage],
  imports:[
    IonicPageModule.forChild(WithdrawrecordPage)
  ],
  exports:[WithdrawrecordPage]
})

export class WithdrawrecordModule{

}
