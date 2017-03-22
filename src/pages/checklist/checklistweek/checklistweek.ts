import { Component, OnInit } from "@angular/core";
import  ChecklistWeekAction  from "./checklistweek.action";
import { ChecklistWeekState } from "./checklistweek.state";
import { ChecklistWeekStore } from "./checklistweek.store";
import { NavController } from "ionic-angular/index";
import { ModalController} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ChecklistDetailComponent} from '../checklistdetail/checklistdetail';
import { ChecklistConfirmComponent} from '../checklistconfirm/checklistconfirm';

@Component({
  selector: "checklistweek",
  providers: [ChecklistWeekAction, ChecklistWeekState, ChecklistWeekStore],
  templateUrl: "checklistweek.html",
})
export class ChecklistWeekComponent implements OnInit {

  constructor(private action: ChecklistWeekAction,
         private state: ChecklistWeekState,
         private store: ChecklistWeekStore,
         private navCtrl: NavController,
         private modalCtrl: ModalController, 
         private alertCtrl: AlertController) {
      this.ngOnInit();
  }

  public ngOnInit() {

       let nowDate = new Date();
       let newDay = nowDate.getDate();
       let nowyear = nowDate.getFullYear();
       let nowmonth = nowDate.getMonth() + 1;

      // var friday = new Date((5 - newDay)*(3600*24*1000)+ nowDate.getTime()).getDate();
       let month : string;
       let day : string;

       if (nowmonth <= 10) {
          month = '0' + nowmonth;
       } else {
          month =  '' +  nowmonth;
       }

       if(newDay <= 10) {
          day = '0' + newDay;
       } else {
          day = '' + newDay;
       }
       let ymd = nowyear + "" + month  + "" + day;
       alert(ymd);
      // this.action.init();
  }

  public addDate(date : Date, index: number) {
     return date.setDate(index);
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
      //this.ngOnInit();
  }
}