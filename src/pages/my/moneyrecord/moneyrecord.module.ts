import {NgModule} from "@angular/core";
import {MoneyrecordPage} from "./moneyrecord";
import {IonicPageModule} from "ionic-angular";
@NgModule({
  declarations:[MoneyrecordPage],
  imports:[
    IonicPageModule.forChild(MoneyrecordPage)
  ],
  exports:[MoneyrecordPage]
})

export class MoneyrecordModule{

}
