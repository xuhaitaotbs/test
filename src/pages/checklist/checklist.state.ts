import {Injectable} from "@angular/core";
import {ResultInterface} from "./checklist.interface";

@Injectable()
export class ChecklistState {
    dataInfo: ResultInterface;
}
