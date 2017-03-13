import {Injectable} from "@angular/core";
import {UserInterface} from "./passwordset.interface";

@Injectable()
export class PasswordsetState {
    dataInfo: UserInterface;
}
