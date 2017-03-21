import { Injectable } from "@angular/core";
import { Dispatcher } from "../../core/Dispatcher";
import { PersonListState } from "./personlist.state";
import { PersonListActionType } from "./personlist.action.type";

@Injectable()
export class PersonListStore {
  constructor(private dispatcher: Dispatcher, private state: PersonListState) {
      this.dispatcher.bindActions({type: PersonListActionType.INIT, instance: this, handler: this.init});
  }

  public init(data) {
      this.state.dataInfo = data.result;
  }
}