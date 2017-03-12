import { Component, OnInit } from "@angular/core";
import  ChecklistStrengthAction  from "./checkliststrength.action";
import { ChecklistStrengthState } from "./checkliststrength.state";
import { ChecklistStrengthStore } from "./checkliststrength.store";
import { NavController } from "ionic-angular/index";
import { ModalController} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ChecklistDetailComponent} from '../checklistdetail/checklistdetail';
import { ChecklistConfirmComponent} from '../checklistconfirm/checklistconfirm';

@Component({
  selector: "checkliststrength",
  providers: [ChecklistStrengthAction, ChecklistStrengthState, ChecklistStrengthStore],
  templateUrl: "checkliststrength.html",
})
export class ChecklistStrengthComponent implements OnInit {

  constructor(private action: ChecklistStrengthAction,
         private state: ChecklistStrengthState,
         private store: ChecklistStrengthStore,
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