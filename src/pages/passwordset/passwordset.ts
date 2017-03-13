import {Component, OnInit} from "@angular/core";
import  PasswordsetAction  from "./passwordset.action";
import { PasswordsetState } from "./passwordset.state";
import { PasswordsetStore } from "./passwordset.store";
import { NavController } from "ionic-angular/index";
import { TabsPage} from '../tabs/tabs';

@Component({
  selector: "passwordset",
  providers: [PasswordsetAction, PasswordsetState, PasswordsetStore],
  templateUrl: "passwordset.html"
})

export class PasswordsetComponent implements OnInit {

  constructor(private action: PasswordsetAction,
         private state: PasswordsetState,
         private store: PasswordsetStore,
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