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

  idx0 : string;
//   ionName2 : string;
//   ionName3 : string;

  constructor(private action: ChecklistAction, private state: ChecklistState,
         private store: ChecklistStore, public navCtrl: NavController,
         private modalCtrl: ModalController) {
      this.ngOnInit();
  }

  public ngOnInit() {
      this.action.init();
    //   this.ionName1 = "radio-button-off";
    //   this.ionName2 = "radio-button-off";
    //  this.idx0 = "radio-button-off";
  }

  openModal(id : string, contents : string) {
     console.log(id);
     console.log(contents);
     var jsonParam = {"question": contents};
     let modal = this.modalCtrl.create(ChecklistDetailComponent, jsonParam);
  
    modal.onDidDismiss(review => {
	      if (review) {
	           if (review.flag) {
                   this.state.dataInfo[id].ionName = "checkmark-circle";
               } else {
                   this.state.dataInfo[id].ionName = "close-circle";
               }
	     }
	  });

    modal.present();
  }
}
