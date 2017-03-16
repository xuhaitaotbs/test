import { Component } from '@angular/core';
import { NavParams } from "ionic-angular";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
    pushMessage: string = "push message will be displayed here";
    constructor(public params: NavParams) {
      if (params.data.message) {
        this.pushMessage = params.data.message;
      }
    }
}
