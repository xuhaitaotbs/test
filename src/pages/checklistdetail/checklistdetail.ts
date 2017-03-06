import { Component, OnInit } from "@angular/core";
import { NavController } from "ionic-angular/index";
import { NavParams, ViewController } from 'ionic-angular';
import { ChecklistComponent} from '../checklist/checklist';

@Component({
  selector: "checklistdetail",
  templateUrl: "checklistdetail.html",
})
export class ChecklistDetailComponent {

  id : string;
  contents : string;

  constructor(private navCtrl: NavController, 
                private params: NavParams, private viewCtrl: ViewController) {
      this.contents = this.params.get('question');
      this.id = this.params.get('id');
  }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    /*
    * 確認ボタン
    */
    onSelect(flag : boolean){
      let returnValue = {
	      "flag": flag
 	    };
      this.viewCtrl.dismiss(returnValue);
    }
}