import {Component} from "@angular/core";
import {IonicPage, NavController, LoadingController,NavParams} from "ionic-angular";
import {CommonService} from "../../../providers/CommonService";
import {CommonToast} from "../../../providers/CommonToas";
import {StorageService} from "../../../providers/StorageService";
@IonicPage({
  name: 'HistorydetailPage',
  segment: 'HistorydetailPage/:id'
})
@Component({
  selector: './page-historydetail',
  templateUrl: 'historydetail.html',
  providers: [CommonService, CommonToast,StorageService]
})

export class HistorydetailPage {
  token;
  orderid;
  name;
  item={
    order_id:'',
    direction:'',
    create_time:'',
    quantity:'',
    price:'',
    deal_price:'',
    fee:'',
    amount:'',
    pl_funds:'',
    pl_ratio:''
  };
  loading;
  constructor(public navCtrl: NavController,
              private commonService: CommonService,
              private CommonToast: CommonToast,
              private storage: StorageService,
              public LoadCtrl: LoadingController,
              private navParams: NavParams,
  ) {
    this.orderid = this.navParams.get('id');
    this.token = this.storage.read("token");


  }
  ionViewDidEnter() {
    this.loading = this.LoadCtrl.create({});
    this.loading.present();
    setTimeout(() => {
      this.Historydetail();
    });
  }
  Historydetail(){
    let param = {
      _TOKEN:this.token,
      id: this.orderid,
    };
    this.commonService.getResult('User/order_detail', param).then(res => {
      if (res.code == 0) {
        setTimeout(() => {
          this.loading.dismiss();
        }, 500);
        this.item=res.data;
        this.name=res.data.product.name;

      } else {
        this.CommonToast.myToast(res.msg);
        setTimeout(() => {
          this.loading.dismiss();
        }, 500);
      }
    })
  }
  goBack() {
    this.navCtrl.pop();
  }



}


