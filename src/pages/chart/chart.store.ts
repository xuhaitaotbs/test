import { Injectable } from "@angular/core";
import { Dispatcher } from "../../core/Dispatcher";
import { ChartState } from "./chart.state";
import { ChartActionType } from "./chart.action.type";

@Injectable()
export class ChartStore {
  constructor(private dispatcher: Dispatcher, private state: ChartState) {
    this.dispatcher.bindActions({
      type: ChartActionType.INIT,
      instance: this,
      handler: this.init
    });
  }

  public init(data) {

    console.log(data);

    this.state.dataInfo = data.result;
  }
}
