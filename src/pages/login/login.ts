import {Component, OnInit,  trigger, state, style, transition, animate, keyframes } from "@angular/core";
import  LoginAction  from "./login.action";
import { LoginState } from "./login.state";
import { LoginStore } from "./login.store";
import { TabsPage} from '../tabs/tabs';
import { ChecklistComponent} from '../checklist/checklist';
import { NavController } from "ionic-angular/index";


@Component({
  selector: "login",
  providers: [LoginAction, LoginState, LoginStore],
  templateUrl: "login.html"
  // animations: [
  //   //For the logo
  //   trigger('flyInBottomSlow', [
  //     state('in', style({
  //       transform: 'translate3d(0,0,0)'
  //     })),
  //     transition('void => *', [
  //       style({transform: 'translate3d(0,2000px,0'}),
  //       animate('2000ms ease-in-out')
  //     ])
  //   ]),

  //   //For the background detail
  //   trigger('flyInBottomFast', [
  //     state('in', style({
  //       transform: 'translate3d(0,0,0)'
  //     })),
  //     transition('void => *', [
  //       style({transform: 'translate3d(0,2000px,0)'}),
  //       animate('1000ms ease-in-out')
  //     ])
  //   ]),

  //   //For the login form
  //   trigger('bounceInBottom', [
  //     state('in', style({
  //       transform: 'translate3d(0,0,0)'
  //     })),
  //     transition('void => *', [
  //       animate('2000ms 200ms ease-in', keyframes([
  //         style({transform: 'translate3d(0,2000px,0)', offset: 0}),
  //         style({transform: 'translate3d(0,-20px,0)', offset: 0.9}),
  //         style({transform: 'translate3d(0,0,0)', offset: 1}) 
  //       ]))
  //     ])
  //   ]),

  //   //For login button
  //   trigger('fadeIn', [
  //       state('in', style({
  //           opacity: 1
  //       })),
  //       transition('void => *', [
  //           style({opacity: 0}),
  //           animate('1000ms 2000ms ease-in')
  //       ])
  //   ])
  // ]
})

export class LoginComponent implements OnInit {

  constructor(private action: LoginAction,
         private state: LoginState,
         private store: LoginStore,
         private navCtrl: NavController) {
      this.ngOnInit();
  }

  public ngOnInit() {
     // this.action.init();
  }

  public login() {
      // 設定画面へ遷移する
      this.navCtrl.push(TabsPage, {"user":"haitao.a.xu"});
  }
}