import { Component, OnInit } from "@angular/core";
import { NavController } from "ionic-angular/index";
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: "checklistdetail",
  templateUrl: "checklistdetail.html",
})
export class ChecklistDetailComponent implements OnInit {

  id : string;
  contents : string;

  constructor(private navCtrl: NavController, 
                private params: NavParams, private viewCtrl: ViewController) {
      this.ngOnInit();
  }

  public ngOnInit() {
      this.contents = this.params.get('question');
      this.id = this.params.get('id');
  }

  public dismiss() {
      this.viewCtrl.dismiss();
  }

  /*
  * 確認ボタン
  */
  public onSelect(flag : boolean) {
    let returnValue = {
      "flag": flag
    };
    this.viewCtrl.dismiss(returnValue);
  }
}