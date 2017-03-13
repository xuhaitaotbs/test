import { Injectable } from "@angular/core";
import { Dispatcher } from "../../core/Dispatcher";
import { PasswordsetState } from "./passwordset.state";
import { PasswordsetActionType } from "./passwordset.action.type";

@Injectable()
export class PasswordsetStore {
  constructor(private dispatcher: Dispatcher, private state: PasswordsetState) {
      this.dispatcher.bindActions({type: PasswordsetActionType.SAVE, instance: this, handler: this.save});
  }

  public save(data) {
  }
}