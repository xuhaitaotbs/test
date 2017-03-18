import { Component, ViewChild } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { StatusBar, Push, Splashscreen } from 'ionic-native';
import { LoginComponent } from '../pages/login/login';
import { ProfileComponent } from "../pages/profile/profile";
import { PasswordsetComponent } from "../pages/passwordset/passwordset";
import { AboutPage } from "../pages/about/about";
import { Backend } from '../../providers/backend';

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
      Splashscreen.hide();
      this.initPushNotification();
    });

    Backend.establish(() => {
	console.info("Server connected");
    })
  }

  initPushNotification(){
    if (!this.platform.is('cordova')) {
      console.warn("Push notifications not initialized. Cordova is not available - Run in physical device");
      return;
    }
    let push = Push.init({
      android: {
        senderID: "8c384c845a6e3326e8f4b464"
      },
      ios: {
        alert: "true",
        badge: false,
        sound: "true"
      },
      windows: {}
    });

    push.on('registration', (data) => {
      console.log("device token ->", data.registrationId);
      //TODO - send device token to server
    });
    push.on('notification', (data) => {
      console.log('message', data.message);
      let self = this;
      //if user using app and push notification comes
      if (data.additionalData.foreground) {
        // if application open, show popup
        let confirmAlert = this.alertCtrl.create({
          title: 'New Notification',
          message: data.message,
          buttons: [{
            text: 'Ignore',
            role: 'cancel'
          }, {
            text: 'View',
            handler: () => {
              //TODO: Your logic here
              self.nav.push(AboutPage, {message: data.message});
            }
          }]
        });
        confirmAlert.present();
      } else {
        //if user NOT using app and push notification comes
        //TODO: Your logic on click of push notification directly
        self.nav.push(AboutPage, {message: data.message});
        console.log("Push notification clicked");
      }
    });
    push.on('error', (e) => {
      console.log(e.message);
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