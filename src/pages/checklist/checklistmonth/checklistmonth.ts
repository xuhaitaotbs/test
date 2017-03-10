import { Component, OnInit } from "@angular/core";
import  ChecklistMonthAction  from "./checklistmonth.action";
import { ChecklistMonthState } from "./checklistmonth.state";
import { ChecklistMonthStore } from "./checklistmonth.store";
import { NavController } from "ionic-angular/index";
import { ModalController} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ChecklistDetailComponent} from '../checklistdetail/checklistdetail';
import { ChecklistConfirmComponent} from '../checklistconfirm/checklistconfirm';

@Component({
  selector: "checklistmonth",
  providers: [ChecklistMonthAction, ChecklistMonthState, ChecklistMonthStore],
  templateUrl: "checklistmonth.html",
})
export class ChecklistMonthComponent implements OnInit {

  constructor(private action: ChecklistMonthAction,
         private state: ChecklistMonthState,
         private store: ChecklistMonthStore,
         private navCtrl: NavController,
         private modalCtrl: ModalController, 
         private alertCtrl: AlertController) {
      this.ngOnInit();
  }

  public ngOnInit() {
      this.action.init();
  }

  public openModal(id : number, contents : string) {
     console.log(id);
     console.log(contents);
     var jsonParam = {"id": id + 1, "question": contents};
     let modal = this.modalCtrl.create(ChecklistDetailComponent, jsonParam);
     //callbackメソッド
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

  public onSubmit() {
       let observable = this.action.save();
       observable.subscribe((data) => {
            var jsonParam = {"message": this.state.message};
            let modal = this.modalCtrl.create(ChecklistConfirmComponent, jsonParam);
            modal.present();
       });
  }

  public onReset() {
      this.ngOnInit();
  }
}