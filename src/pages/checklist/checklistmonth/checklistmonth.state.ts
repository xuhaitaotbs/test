import {Injectable} from "@angular/core";
import {ResultInterface} from "./checklistmonth.interface";

@Injectable()
export class ChecklistMonthState {
    dataInfo: ResultInterface;
    status : number;
    message: string;
}
