import { Injectable } from "@angular/core";
import { Dispatcher } from "../../core/Dispatcher";
import { HttpService } from "../../core/HttpService";
import { ProfileActionType } from './profile.action.type';

@Injectable()
export default class LoginAction {
  constructor(private dispatcher: Dispatcher, private httpService: HttpService) {
  }

  public save() {
    let observable = this.httpService.getFakeData('assets/checklist.json', {});
    observable.subscribe(
      (data) => this.dispatcher.dispatch(ProfileActionType.SAVE, data)
    );
    return observable;
  }
}