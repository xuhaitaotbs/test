import { Component, OnInit } from "@angular/core";
import { NavController } from "ionic-angular/index";
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: "checklistdetail",
  templateUrl: "checklistdetail.html",
})
export class ChecklistDetailComponent {

  contents : string;

  constructor(private params: NavParams, private viewCtrl: ViewController) {
      this.contents = this.params.get('question');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
