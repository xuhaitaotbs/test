import { Injectable } from "@angular/core";
import { Dispatcher } from "../../core/Dispatcher";
import { ChecklistState } from "./checklist.state";
import { ChecklistActionType } from "./checklist.action.type";

@Injectable()
export class ChecklistStore {
  constructor(private dispatcher: Dispatcher, private state: ChecklistState) {
    this.dispatcher.bindActions({
      type: ChecklistActionType.INIT,
      instance: this,
      handler: this.init
    });
  }

  public init(data) {
    this.state.dataInfo = data.result;
  }
}
