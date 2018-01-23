import {NgModule} from "@angular/core";
import {FinancePage} from "./finance";
import {IonicPageModule} from "ionic-angular";
@NgModule({
  declarations:[FinancePage],
  imports:[
    IonicPageModule.forChild(FinancePage)
  ],
  exports:[FinancePage]
})

export class FinanceModule{

}
