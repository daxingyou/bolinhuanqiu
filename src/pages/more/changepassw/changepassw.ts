import {Component} from "@angular/core";
import {IonicPage, NavController} from "ionic-angular";
import {CommonService} from "../../../providers/CommonService";
import {CommonToast} from "../../../providers/CommonToas";
import {StorageService} from "../../../providers/StorageService";
@IonicPage({
  name: 'ChangepasswPage',
  segment: 'ChangepasswPage'
})
@Component({
  selector: './page-changepassw',
  templateUrl: 'changepassw.html',
  providers: [CommonService, CommonToast,StorageService]
})

export class ChangepasswPage {
  infor = {
    oldpsw: '',
    newpsw: '',
    renewpsw: '',
  };
  token;
  constructor(public navCtrl: NavController,
              private commonService: CommonService,
              private CommonToast: CommonToast,
              private storage: StorageService,
  ) {
    this.token = this.storage.read("token");
  }
  /**
   * 修改密码
   */

  changePassword() {
    let param = {
      _TOKEN:this.token,
      old_password: this.infor.oldpsw,
      new_password: this.infor.newpsw,
      confirm_password: this.infor.renewpsw
    };
    this.commonService.getResult('Auth/change_password', param).then(res => {
      if (res.code == 0) {
        this.CommonToast.myToast(res.msg);
        this.navCtrl.push('LoginPage');
      } else {
        this.CommonToast.myToast(res.msg);
      }
    })
  }
  goBack() {
    this.navCtrl.pop();
  }

}


