import { Injectable } from "@angular/core";
import { Dispatcher } from "../../../core/Dispatcher";
import { ChecklistMenuState } from "./checklistmenu.state";
import { ChecklistMenuActionType } from "./checklistmenu.action.type";

@Injectable()
export class ChecklistMenuStore {
  constructor(private dispatcher: Dispatcher, private state: ChecklistMenuState) {
      this.dispatcher.bindActions({type: ChecklistMenuActionType.INIT, instance: this, handler: this.init});
  }

  public init(data) {
      this.state.dataInfo = data.result;
  }
}