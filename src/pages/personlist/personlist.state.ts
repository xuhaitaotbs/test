import {Injectable} from "@angular/core";
import {ResultInterface} from "./personlist.interface";

@Injectable()
export class PersonListState {
    personInfo: ResultInterface[];
}
