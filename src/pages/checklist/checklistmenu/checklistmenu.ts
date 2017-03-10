import { Component, OnInit } from "@angular/core";
import  ChecklistMenuAction  from "./checklistmenu.action";
import { ChecklistMenuState } from "./checklistmenu.state";
import { ChecklistMenuStore } from "./checklistmenu.store";
import { NavController } from "ionic-angular/index";

@Component({
  selector: "checklistmenu",
  providers: [ChecklistMenuAction, ChecklistMenuState, ChecklistMenuStore],
  templateUrl: "checklistmenu.html",
})
export class ChecklistMenuComponent implements OnInit {

  constructor(private action: ChecklistMenuAction,
         private state: ChecklistMenuState,
         private store: ChecklistMenuStore,
         private navCtrl: NavController) {
      this.ngOnInit();
  }

  public ngOnInit() {
      //this.action.init();
  }
}