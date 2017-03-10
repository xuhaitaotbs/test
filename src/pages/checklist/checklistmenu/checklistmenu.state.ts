import {Injectable} from "@angular/core";
import {ResultInterface} from "./checklistmenu.interface";

@Injectable()
export class ChecklistMenuState {
    dataInfo: ResultInterface;
    status : number;
    message: string;
}
