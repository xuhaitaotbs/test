import { Injectable } from "@angular/core";
import { Dispatcher } from "../../core/Dispatcher";
import { HttpService } from "../../core/HttpService";
import { PersonListActionType } from './personlist.action.type';

@Injectable()
export default class PersonListAction {
  constructor(private dispatcher: Dispatcher, private httpService: HttpService) {
  }

  public init() {
    let observable = this.httpService.getFakeData('assets/checklist.json', {});
    observable.subscribe(
      (data) => this.dispatcher.dispatch(PersonListActionType.INIT, data)
    );
    return observable;
  }
}