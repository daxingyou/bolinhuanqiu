import {Component,ViewChild} from "@angular/core";
import {IonicPage, NavController, LoadingController,Slides,NavParams} from "ionic-angular";
import {CommonService} from "../../providers/CommonService";
// import {CommonToast} from "../../providers/CommonToas";
import {StorageService} from "../../providers/StorageService";
@IonicPage({
  name: 'HomePage',
  segment: 'HomePage'
})
@Component({
  selector: './page-home',
  templateUrl: 'home.html',
  providers: [CommonService, StorageService]
})

export class HomePage {
  @ViewChild('mySlider') slider: Slides;
  mySlider = {
    autoPlay: 2000,
    initialSlide: 0,
    pager: true,
    loop: true,
    speed: 300
  };
  token;
  constructor(public navCtrl: NavController,
              private storage: StorageService,
              public navParams:NavParams,
              public LoadCtrl: LoadingController) {

    this.token = this.storage.read("token");
  }
  onViewWillEnter() {
    this.slider.startAutoplay();
  }

  ionViewWillLeave() {
    this.slider.stopAutoplay();
  }


  ngOnInit() {//页面加载完成后自己调用

    setInterval(() => {
      this.slider.slideNext(300, true);
    }, 2000);
  }


  register(){
    this.navCtrl.push('LoginPage');
  }
  goRecharge(){
    this.navCtrl.push('RechargePage');
  }
  goHomedetail(){
    this.navCtrl.push('HomedetailPage');
  }

}


