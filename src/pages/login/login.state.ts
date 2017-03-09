import {Injectable} from "@angular/core";
import {UserInterface} from "./login.interface";

@Injectable()
export class LoginState {
    dataInfo: UserInterface;
}
