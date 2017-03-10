import { Injectable } from "@angular/core";
import { Dispatcher } from "../../../core/Dispatcher";
import { HttpService } from "../../../core/HttpService";
import { ChecklistMenuActionType } from './checklistmenu.action.type';

@Injectable()
export default class ChecklistMenuAction {
  constructor(private dispatcher: Dispatcher, private httpService: HttpService) {
  }

  public init() {
    let observable = this.httpService.getFakeData('assets/checklist.json', {});
    observable.subscribe(
      (data) => this.dispatcher.dispatch(ChecklistMenuActionType.INIT, data)
    );
    return observable;
  }
}