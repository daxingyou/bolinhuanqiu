import {NgModule} from "@angular/core";
import {ChargerecordPage} from "./chargerecord";
import {IonicPageModule} from "ionic-angular";
@NgModule({
  declarations:[ChargerecordPage],
  imports:[
    IonicPageModule.forChild(ChargerecordPage)
  ],
  exports:[ChargerecordPage]
})

export class ChargerecordModule{

}
