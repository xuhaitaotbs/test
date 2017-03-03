// import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';
// import { HttpService } from "../../core/HttpService";
// import { State, ResultInterface } from "./state";

// @Component({
//   selector: 'page-contact',
//   templateUrl: 'contact.html',
//   providers:[HttpService,State]
// })
// export class ContactPage {

//   dataList : ResultInterface[];

//   constructor(private navCtrl: NavController, private httpService: HttpService, private state: State ) {
//       this.init();
//   }

//   init() {
//       let observable = this.httpService.get("assets/checklist.json",{});
//       observable.subscribe(
//       (data) => this.dataList = data.result
//       );
//   }
// }