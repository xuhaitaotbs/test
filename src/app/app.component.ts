import { Component, ViewChild } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { StatusBar, JPush, Splashscreen } from 'ionic-native';
import { LoginComponent } from '../pages/login/login';
import { ProfileComponent } from "../pages/profile/profile";
import { PasswordsetComponent } from "../pages/passwordset/passwordset";
import { AboutPage } from "../pages/about/about";
import { Backend } from '../../providers/backend';
import { PersonListComponent } from '../pages/personlist/personlist';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
    
  @ViewChild('content') nav;

  rootPage = LoginComponent;

  constructor(public platform: Platform, public alertCtrl: AlertController) {
        platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();

      JPush.init().then(res => { alert(res) });  // ���n��

      document.addEventListener("jpush.openNotification", (event?: any) => {
        console.log("===============��?�������e===============")
        alert(event.alert)
      }, false);

    });
  }

  public personList() {
      this.nav.push(PersonListComponent, {});
  }

  public userSetting() {
      this.nav.push(ProfileComponent, {"person" : "person"});
  }

  public passwordReset() {
      this.nav.push(PasswordsetComponent);
  }
  
  public logout() {
    this.nav.popToRoot();
  }
}