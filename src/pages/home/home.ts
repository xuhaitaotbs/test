import 'rxjs';
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Backend } from '../../../providers/backend';

import { Platform } from 'ionic-angular';
import { JPushService } from 'ionic2-jpush';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  xxx: string;
  constructor(public navCtrl: NavController,
	    private platform: Platform,
			private jPushPlugin: JPushService) {

				platform.ready().then( () =>{

             this.jPushPlugin.openNotification()
               .subscribe( res => {
                 console.log('收到推送');
                 console.log(res)
               });
       
             this.jPushPlugin.receiveNotification()
               .subscribe( res => {
                 console.log('收到推送');
                 console.log(res)
               });
       
             this.jPushPlugin.receiveMessage()
               .subscribe( res => {
                 console.log('收到推送');
                 console.log(res)
               });
       
           })




    //   Backend.socket.on("MESSAGE_CREATE", (response) => {
		// 	    //this.logs.push(JSON.stringify(response.message));
		// 			this.xxx = JSON.stringify(response.message);
		// })
  }

	 /**
    * 注册极光
    */
   init() {
    this.jPushPlugin.init()
    .then(res => alert(res))
    .catch(err => alert(err))
    }

		 /**
    * 获取ID
    */
    getRegistrationID() {
     this.jPushPlugin.getRegistrationID()
     .then(res => alert(res))
     .catch(err => alert(err))
     }



	send() {
		Backend.socket.emit("MESSAGE_CREATE", {
			text: 'hello websocket'
		}, (response) => {

		})
	}
}
