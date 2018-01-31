import {Component,ViewChild} from "@angular/core";
import {IonicPage, NavController, LoadingController,Slides} from "ionic-angular";

@IonicPage({
  name: 'HomePage',
  segment: 'HomePage'
})
@Component({
  selector: './page-home',
  templateUrl: 'home.html'
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
  constructor(public navCtrl: NavController,
              public LoadCtrl: LoadingController) {

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


