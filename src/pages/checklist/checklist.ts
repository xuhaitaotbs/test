import { Component, OnInit } from "@angular/core";
import  ChecklistAction  from "./checklist.action";
import { ChecklistState } from "./checklist.state";
import { ChecklistStore } from "./checklist.store";
import { NavController } from "ionic-angular/index";
import { ModalController} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ChecklistDetailComponent} from '../checklistdetail/checklistdetail';
import { ChecklistConfirmComponent} from '../checklistconfirm/checklistconfirm';

@Component({
  selector: "checklist",
  providers: [ChecklistAction, ChecklistState, ChecklistStore],
  templateUrl: "checklist.html",
})
export class ChecklistComponent implements OnInit {

  constructor(private action: ChecklistAction,
         private state: ChecklistState,
         private store: ChecklistStore,
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

//   private alertMessage() {
//       let alert = this.alertCtrl.create({
//             title: 'Message',
//             subTitle: this.state.message,
//             buttons: ['OK']
//       });
//       alert.present();
//   }
}