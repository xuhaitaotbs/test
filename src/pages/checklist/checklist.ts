import { Component, OnInit } from "@angular/core";
import  ChecklistAction  from "./checklist.action";
import { ChecklistState } from "./checklist.state";
import { ChecklistStore } from "./checklist.store";
import { NavController } from "ionic-angular/index";

@Component({
  selector: "checklist",
  providers: [ChecklistAction, ChecklistState, ChecklistStore],
  templateUrl: "checklist.html",
})
export class ChecklistComponent implements OnInit {

  constructor(private action: ChecklistAction, private state: ChecklistState,
         private store: ChecklistStore, public navCtrl: NavController) {
      this.ngOnInit(); 
  }

  public ngOnInit() {
      this.action.init();
  }

}
