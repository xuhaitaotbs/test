import {Component, OnInit} from "@angular/core";
import  ProfileAction  from "./profile.action";
import { ProfileState } from "./profile.state";
import { ProfileStore } from "./profile.store";
import { NavController } from "ionic-angular/index";
import { TabsPage} from '../tabs/tabs';

@Component({
  selector: "profile",
  providers: [ProfileAction, ProfileState, ProfileStore],
  templateUrl: "profile.html"
})

export class ProfileComponent implements OnInit {

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
}