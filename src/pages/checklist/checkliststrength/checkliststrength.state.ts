import {Injectable} from "@angular/core";
import {ResultInterface} from "./checkliststrength.interface";

@Injectable()
export class ChecklistStrengthState {
    dataInfo: ResultInterface;
    status : number;
    message: string;
}
