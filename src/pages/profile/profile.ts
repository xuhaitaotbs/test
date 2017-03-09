import {Component, OnInit} from "@angular/core";
import  ProfileAction  from "./profile.action";
import { ProfileState } from "./profile.state";
import { ProfileStore } from "./profile.store";
import { NavController } from "ionic-angular/index";
import { TabsPage} from '../tabs/tabs';
import { Camera} from 'ionic-native';

@Component({
  selector: "profile",
  providers: [ProfileAction, ProfileState, ProfileStore],
  templateUrl: "profile.html"
})

export class ProfileComponent implements OnInit {

  public base64Image: string;

  constructor(private action: ProfileAction,
         private state: ProfileState,
         private store: ProfileStore,
         private navCtrl: NavController) {
      this.ngOnInit();
  }

  public ngOnInit() {
     // this.action.init();
  }

  public onSave() {
      // 設定画面へ遷移する
      this.navCtrl.push(TabsPage, {"user":"haitao.a.xu"});
  }

  takePicture(){
    Camera.getPicture({
        destinationType: Camera.DestinationType.DATA_URL,
        targetWidth: 1000,
        targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        console.log(err);
    });
  }
}