import {Injectable} from "@angular/core";
import {ResultInterface} from "./personlist.interface";

@Injectable()
export class PersonListState {
    dataInfo: ResultInterface;
    status : number;
    message: string;
}
