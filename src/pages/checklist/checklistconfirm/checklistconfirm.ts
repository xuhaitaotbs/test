import { Component, OnInit } from "@angular/core";
import { NavController } from "ionic-angular/index";
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: "checklistconfirm",
  templateUrl: "checklistconfirm.html",
})
export class ChecklistConfirmComponent implements OnInit {

  message : string;

    // Doughnut
  public doughnutChartLabels:string[] = ['正確率', '錯誤率'];
  public barcolors = [{ backgroundColor: "rgb(255, 193, 206)"}, {backgroundColor: "rgb(255, 226, 154)"}];//red

  public doughnutChartData:number[] = [8, 5];
  public doughnutChartType:string = 'doughnut';

  // private CHART_OPTIONS = {
  //   responsive: true,
  //   maintainAspectRatio: false,
  // };

  constructor(private navCtrl: NavController, 
                private params: NavParams, private viewCtrl: ViewController) {
      this.ngOnInit();
  }

  public ngOnInit() {
      this.message = this.params.get('message');
  }

  /*
  * 閉じる
  */
  public dismiss() {
      this.viewCtrl.dismiss();
  }
}