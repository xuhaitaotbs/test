import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { LoginComponent } from '../pages/login/login';
import { ProfileComponent } from "../pages/profile/profile";
import { PasswordsetComponent } from "../pages/passwordset/passwordset";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
    
  @ViewChild('content') nav;

  rootPage = LoginComponent;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
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