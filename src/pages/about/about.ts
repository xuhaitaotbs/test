import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

   
   public websocket : any;

   constructor(public navCtrl: NavController) {
      //判断当前浏览器是否支持WebSocket
     if('WebSocket' in window){
        this.websocket = new WebSocket("ws://localhost:9090/boot");
      } 
      else{
        alert('Not support websocket')
      }

    // //连接发生错误的回调方法
    // this.websocket.onerror = function(){
    //     setMessageInnerHTML("error");
    // };

    // //连接成功建立的回调方法
    // this.websocket.onopen = function(event){
    //     setMessageInnerHTML("open");
    // }

    // //接收到消息的回调方法
    // this.websocket.onmessage = function(event){
    //     alert('alert')
    //     setMessageInnerHTML(event.data);
    // }

    // //连接关闭的回调方法
    // this.websocket.onclose = function(){
    //     setMessageInnerHTML("close");
    // }

    // //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
    // // window.onbeforeunload = function(){
    // //     this.websocket.close();
    // // }

    // //将消息显示在网页上
    // function setMessageInnerHTML(innerHTML){
    //     document.getElementById('message').innerHTML += innerHTML + '<br/>';
    // }

    // //关闭连接
    // function closeWebSocket(){
    //     this.websocket.close();
    // }

    // //发送消息
    // function send(){
    //     this.websocket.send('admin');
    // }

   }


    
}
