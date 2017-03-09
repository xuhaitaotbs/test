import { Injectable } from "@angular/core";
import { Dispatcher } from "../../core/Dispatcher";
import { ProfileState } from "./profile.state";
import { ProfileActionType } from "./profile.action.type";

@Injectable()
export class ProfileStore {
  constructor(private dispatcher: Dispatcher, private state: ProfileState) {
      this.dispatcher.bindActions({type: ProfileActionType.SAVE, instance: this, handler: this.save});
  }

  public save(data) {
  }
}