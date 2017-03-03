import { Injectable } from "@angular/core";
import { Dispatcher } from "../../core/Dispatcher";
import { HttpService } from "../../core/HttpService";
import { ChartActionType } from './chart.action.type';

@Injectable()
export default class ChartAction {
  constructor(private dispatcher: Dispatcher, private httpService: HttpService) {
  }

  public init() {
    // let observable = this.httpService.get('./data/qa-init.json', {});
    let observable = this.httpService.getFakeData('assets/checklist.json', {});
    observable.subscribe(
      (data) => this.dispatcher.dispatch(ChartActionType.INIT, data)
    );
    return observable;
  }
}