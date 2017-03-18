import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Backend } from '../../../providers/backend';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  xxx: string;
  constructor(public navCtrl: NavController) {
      Backend.socket.on("MESSAGE_CREATE", (response) => {
			    //this.logs.push(JSON.stringify(response.message));
					this.xxx = JSON.stringify(response.message);
		})
  }

	send() {
		Backend.socket.emit("MESSAGE_CREATE", {
			text: 'hello websocket'
		}, (response) => {

		})
	}
}
