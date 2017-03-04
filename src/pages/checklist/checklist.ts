import { Component, OnInit } from "@angular/core";
import  ChecklistAction  from "./checklist.action";
import { ChecklistState } from "./checklist.state";
import { ChecklistStore } from "./checklist.store";
import { NavController } from "ionic-angular/index";
import { ModalController} from 'ionic-angular';
import { ChecklistDetailComponent} from '../checklistdetail/checklistdetail';

@Component({
  selector: "checklist",
  providers: [ChecklistAction, ChecklistState, ChecklistStore],
  templateUrl: "checklist.html",
})
export class ChecklistComponent implements OnInit {

  constructor(private action: ChecklistAction, private state: ChecklistState,
         private store: ChecklistStore, public navCtrl: NavController,
         private modalCtrl: ModalController) {
      this.ngOnInit(); 
  }

  public ngOnInit() {
      this.action.init();
  }

  openModal(contents : string) {
     console.log(contents);
     var jsonParam = {"question": contents};
     let modal = this.modalCtrl.create(ChecklistDetailComponent, jsonParam);
     modal.present();
  }
}
