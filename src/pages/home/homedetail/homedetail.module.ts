import {NgModule} from "@angular/core";
import {HomedetailPage} from "./homedetail";
import {IonicPageModule} from "ionic-angular";
@NgModule({
  declarations:[HomedetailPage],
  imports:[
    IonicPageModule.forChild(HomedetailPage)
  ],
  exports:[HomedetailPage]
})

export class HomedetailModule{

}
