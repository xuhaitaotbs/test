import {Injectable} from "@angular/core";
import {UserInterface} from "./profile.interface";

@Injectable()
export class ProfileState {
    dataInfo: UserInterface;
}
