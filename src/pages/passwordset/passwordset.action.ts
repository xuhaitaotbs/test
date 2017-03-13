import { Injectable } from "@angular/core";
import { Dispatcher } from "../../core/Dispatcher";
import { HttpService } from "../../core/HttpService";
import { PasswordsetActionType } from './passwordset.action.type';

@Injectable()
export default class Action {
  constructor(private dispatcher: Dispatcher, private httpService: HttpService) {
  }

  public save() {
    let observable = this.httpService.getFakeData('assets/checklist.json', {});
    observable.subscribe(
      (data) => this.dispatcher.dispatch(PasswordsetActionType.SAVE, data)
    );
    return observable;
  }
}