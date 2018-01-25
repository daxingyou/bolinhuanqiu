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

  tab1Root='HomePage';
  tab2Root='DealPage';
  tab3Root='MyPage';
  tab4Root= 'MorePage';
  id;
  constructor() {

  }


}
