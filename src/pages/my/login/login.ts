import {Component} from "@angular/core";
import {IonicPage, NavController, LoadingController} from "ionic-angular";
import {CommonService} from "../../../providers/CommonService";
import {CommonToast} from "../../../providers/CommonToas";
import {StorageService} from "../../../providers/StorageService";
@IonicPage({
  name: 'LoginPage',
  segment: 'LoginPage'
})
@Component({
  selector: './page-login',
  templateUrl: 'login.html',
  providers: [CommonService, CommonToast,StorageService]
})

export class LoginPage {
  infor = {
    phone: '',
    password: '',
  };
  Token;
  constructor(public navCtrl: NavController,
              public LoadCtrl: LoadingController,
              private commonService: CommonService,
              private CommonToast: CommonToast,
              private storage: StorageService,
  ) {


  }
  /**
   * 登录
   */

  login() {
    let regex = /(^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$)|(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;
    let param = {
      mobile: this.infor.phone,
      password: this.infor.password
    };
    if (!regex.test(this.infor.phone)) {
      this.CommonToast.myToast('请正确输入手机号码');
      return false;
    }
    this.commonService.getResult('Auth/login', param).then(res => {
      if (res.code == 0) {
        this.storage.write('token', res.data.token);
        this.CommonToast.myToast(res.msg);
        this.navCtrl.push('tabsPage');
      } else {
        this.CommonToast.myToast(res.msg);
      }
    })
  }

  register(){
    this.navCtrl.push('RegisterPage');
  }


}


