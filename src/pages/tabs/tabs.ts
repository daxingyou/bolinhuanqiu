import {IonicPage} from "ionic-angular";
import {Component} from "@angular/core";

@IonicPage({
  name: 'tabsPage',
  segment: 'tabsPage'
})
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // @ViewChild('mainTabs') tabs: Tabs;

  tab1Root='DealPage';
  tab2Root='AccountPage';
  tab3Root='PositionPage';
  tab4Root= 'FinancePage';
  id;
  constructor() {

  }


}
