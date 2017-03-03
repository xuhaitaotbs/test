import { Component, OnInit } from "@angular/core";
import ChartAction from "./chart.action";
import { ChartState } from "./chart.state";
import { ChartStore } from "./chart.store";
import { NavController } from "ionic-angular/index";

@Component({
  selector: "chart",
  providers: [ChartAction, ChartState, ChartStore],
  templateUrl: "chart.html",
})
export class ChartComponent implements OnInit {

  constructor(private action: ChartAction, private state: ChartState, private store: ChartStore, public navCtrl: NavController) {
    this.ngOnInit(); 
 }

  public ngOnInit() {
      this.action.init();
  }

}
