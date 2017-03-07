import { Injectable } from "@angular/core";
import { Dispatcher } from "../../core/Dispatcher";
import { ChecklistState } from "./checklist.state";
import { ChecklistActionType } from "./checklist.action.type";

@Injectable()
export class ChecklistStore {
  constructor(private dispatcher: Dispatcher, private state: ChecklistState) {
      this.dispatcher.bindActions({type: ChecklistActionType.INIT, instance: this, handler: this.init});

      this.dispatcher.bindActions({type: ChecklistActionType.SAVE, instance: this, handler: this.save});
  }

  public init(data) {
      this.state.dataInfo = data.result;
  }

  public save(data) {
      if (data.status === 1) {
          this.state.message = "お見事です！すべて正解です！";
      } else if(data.status === 2) {
          this.state.message = "質問よく読んでから答えてください！";
      } else {
          this.state.message = "大丈夫ですか？トレーニング参加してください！";
      }
      this.state.status = data.status;
  }
}