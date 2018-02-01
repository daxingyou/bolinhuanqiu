import {Component} from "@angular/core";
import {IonicPage, NavController,LoadingController} from "ionic-angular";
import {CommonService} from "../../../providers/CommonService";
import {CommonToast} from "../../../providers/CommonToas";
import {StorageService} from "../../../providers/StorageService";
@IonicPage({
  name:'WithdrawrecordPage',
  segment:'WithdrawrecordPage'
})

@Component({
  selector: 'page-withdrawrecord',
  templateUrl: 'withdrawrecord.html',
  providers: [CommonService, CommonToast,StorageService]
})


export class WithdrawrecordPage {
  token;
  page=1;
  loadCtrling=false;
  loading;
  itemx=[];
  list=[];
  constructor(public navCtrl: NavController,
              private commonService: CommonService,
              private CommonToast: CommonToast,
              private storage: StorageService,
              public LoadCtrl: LoadingController
  ) {
    this.token = this.storage.read("token");
  }
  ionViewDidEnter() {
    this.loading = this.LoadCtrl.create({});
    this.loading.present();
    setTimeout(() => {
      this.Withdrawrecord(this.page);
    });
  }
  /**
   * 提现明细
   */
  Withdrawrecord(page){
    if (page == 1) {
      this.itemx = [];
    }
    this.page = page;
    let param = {
      _TOKEN:this.token,
      page: page,
    };
    this.commonService.getResult('User/transfer_log', param).then(res => {
      if (res.code == 0) {
        setTimeout(() => {
          this.loading.dismiss();
        }, 500);
        this.list = res.data.data;
        this.itemx = this.itemx.concat(this.list);
      } else {
        this.CommonToast.myToast(res.msg);
        setTimeout(() => {
          this.loading.dismiss();
        }, 500);
      }
    })
  }
  /**
   * 刷新
   * @param refresher
   */
  doRefresh(refresher) {
    this.itemx = [];
    setTimeout(() => {
      this.page = 1;
      this.Withdrawrecord(this.page);
      refresher.complete();
    }, 2000);
  }

  /**
   * 加载更多
   * @param Infinite
   */
  doInfiniteMember(Infinite) {
    setTimeout(() => {
      this.page += 1;
      this.Withdrawrecord(this.page);
      Infinite.complete();
    }, 2000);
  }
  goBack() {
    this.navCtrl.pop();
  }




}
