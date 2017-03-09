import { Injectable } from "@angular/core";
import { Dispatcher } from "../../core/Dispatcher";
import { HttpService } from "../../core/HttpService";
import { LoginActionType } from './login.action.type';

@Injectable()
export default class LoginAction {
  constructor(private dispatcher: Dispatcher, private httpService: HttpService) {
  }

  public login() {
    let observable = this.httpService.getFakeData('assets/checklist.json', {});
    observable.subscribe(
      (data) => this.dispatcher.dispatch(LoginActionType.LOGIN, data)
    );
    return observable;
  }
}