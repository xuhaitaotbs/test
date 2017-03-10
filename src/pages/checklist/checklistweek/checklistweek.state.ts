import {Injectable} from "@angular/core";
import {ResultInterface} from "./checklistweek.interface";

@Injectable()
export class ChecklistWeekState {
    dataInfo: ResultInterface;
    status : number;
    message: string;
}
