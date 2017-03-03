import {Injectable} from "@angular/core";
import {ResultInterface} from "./chart.interface";

@Injectable()
export class ChartState {
    dataInfo: ResultInterface;
}
