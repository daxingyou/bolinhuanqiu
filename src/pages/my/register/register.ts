import {Component} from "@angular/core";
import {IonicPage, NavController, LoadingController} from "ionic-angular";
import {CommonService} from "../../../providers/CommonService";
import {CommonToast} from "../../../providers/CommonToas";

@IonicPage({
  name: 'RegisterPage',
  segment: 'RegisterPage'
})
@Component({
  selector: './page-register',
  templateUrl: 'register.html',
  providers: [CommonService, CommonToast]
})

export class RegisterPage {
  infor = {
    phone: '',
    username: '',
    password: '',
    repassword: '',
    invitecode: '',
    verifycode: '',
    disclaimer: 1
  };

  flag = true;
  countdown;

  constructor(public navCtrl: NavController,
              public LoadCtrl: LoadingController,
              private commonService: CommonService,
              private CommonToast: CommonToast) {


  }

  /**
   * 注册
   */

  register() {

    let regex = /(^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$)|(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;
    let param = {
      mobile: this.infor.phone,
      username: this.infor.username,
      password: this.infor.password,
      confirm_password: this.infor.repassword,
      invitation_code: this.infor.invitecode,
      verify_code: this.infor.verifycode,
      disclaimer: this.infor.disclaimer
    };
    if (this.infor.disclaimer != 1) {
      this.CommonToast.myToast('请同意免责声明！');
      return false;
    }
    if (!regex.test(this.infor.phone)) {
      this.CommonToast.myToast('请正确输入手机号码');
      return false;
    }
    this.commonService.getResult('Auth/reg', param).then(res => {
      if (res.code == 0) {
        this.CommonToast.myToast(res.msg);
        this.navCtrl.push('LoginPage');
      } else {
        this.CommonToast.myToast(res.msg);
      }
    })
  }

  /**
   * 获取验证码
   */
  sendMsg() {
    let param = {
      mobile: this.infor.phone
    };
    if (this.infor.phone == '' || this.infor.phone == null) {
      this.CommonToast.myToast('请输入手机号码');
      return false;
    }
    else if (this.flag == true) {
      this.flag = false;
      let sendMsg = document.body.querySelector('.get-code');
      this.countdown = 60;
      this.commonService.getResult('Common/sms_code', param).then(res => {
        if (res.code == 0) {
          this.CommonToast.myToast(res.msg);
          this.settime(sendMsg);
          this.flag = true;
        } else {
          this.CommonToast.myToast(res.msg);
          this.flag = true;
        }
      })
    }
  }


  //倒计时
  settime(obj) {
    if (this.countdown == 0) {
      obj.removeAttribute("disabled");
      obj.innerHTML = "获取验证码";
      this.countdown = 60;
      return;
    } else {
      obj.setAttribute("disabled", true);
      obj.innerHTML = "重新发送(" + this.countdown + ")";
      this.countdown--;
    }
    setTimeout(() => {
      this.settime(obj)
    }, 1000)
  }

}


