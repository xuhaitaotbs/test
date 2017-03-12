import { Injectable } from "@angular/core";
import { Dispatcher } from "../../../core/Dispatcher";
import { HttpService } from "../../../core/HttpService";
import { ChecklistStrengthActionType } from './checkliststrength.action.type';

@Injectable()
export default class ChecklistStrengthAction {
  constructor(private dispatcher: Dispatcher, private httpService: HttpService) {
  }

  public init() {
    let observable = this.httpService.getFakeData('assets/checklist.json', {});
    observable.subscribe(
      (data) => this.dispatcher.dispatch(ChecklistStrengthActionType.INIT, data)
    );
    return observable;
  }

  public save() {
    let observable = this.httpService.getFakeData('assets/checklistSave.json', {});
    observable.subscribe(
      (data) => this.dispatcher.dispatch(ChecklistStrengthActionType.SAVE, data)
    );
    return observable;
  }
}