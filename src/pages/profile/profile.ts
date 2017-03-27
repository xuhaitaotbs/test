import {Component, OnInit} from "@angular/core";
import  ProfileAction  from "./profile.action";
import { ProfileState } from "./profile.state";
import { ProfileStore } from "./profile.store";
import { NavController } from "ionic-angular/index";
import { TabsPage} from '../tabs/tabs';
import { Camera } from 'ionic-native';
import { ActionSheet } from 'ionic-native';
import { ProfileImage } from "./profile.interface";

@Component({
  selector: "profile",
  providers: [ProfileAction, ProfileState, ProfileStore],
  templateUrl: "profile.html"
})

export class ProfileComponent implements OnInit {

 // loginForm: FormGroup;
  tieluxian: any;
  tieluzhan: any;
  shangbaoren: any;
  gonglibiao: any;
  shijianmiaoshu:any;
  public path;
  /*profilePicture: any = "https://www.gravatar.com/avatar/";*/
  //给image设置默认的图片
  profilePicture: any="assets/image/photo.png";
  constructor(private action: ProfileAction,
         private state: ProfileState,
         private store: ProfileStore,
         private navCtrl: NavController) {
      this.ngOnInit();
  }

  public ngOnInit() {
     this.profilePicture = ProfileImage.PROFILEIMAGE;
  }

  public onSave() {
      // 設定画面へ遷移する
      this.navCtrl.push(TabsPage, {"user":"haitao.a.xu"});
  }

  public showActionSheet() {
    let buttonLabels = ['カメラ起動', 'ライブラリから選択'];
    ActionSheet.show({
      'title': '選択してくだい！',
      'buttonLabels': buttonLabels
    }).then((buttonIndex: number) => {
         switch(buttonIndex) {
            case 1:
                this.takePhoto();
                break;
            case 2:
                this.choosePhoto();
                break;
            default:break;
         }
    });
  }

  public takePhoto() {
    var options = {
      // Some common settings are 20, 50, and 100
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      // In this app, dynamically set the picture source, Camera or photo gallery

      encodingType: Camera.EncodingType.JPEG,
      mediaType: Camera.MediaType.PICTURE,
      saveToPhotoAlbum:true,
      sourceType:Camera.PictureSourceType.CAMERA,//拍照时，此参数必须有，否则拍照之后报错，照片不能保存
      allowEdit: true,

      correctOrientation: true  //Corrects Android orientation quirks
    }
    /**
     * imageData就是照片的路径，关于这个imageData还有一些细微的用法，可以参考官方的文档。
     */
    Camera.getPicture(options).then((imageData) => {

      this.profilePicture = "data:image/jpeg;base64," + imageData;//给image设置source。
      
    }, (err) => {
      // Handle error
    });
  }

  public choosePhoto() {

    var options = {
      // Some common settings are 20, 50, and 100
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      // In this app, dynamically set the picture source, Camera or photo gallery
      sourceType:0,//0对应的值为PHOTOLIBRARY ，即打开相册
      encodingType: Camera.EncodingType.JPEG,
      mediaType: Camera.MediaType.PICTURE,
      allowEdit: true,
      correctOrientation: true  //Corrects Android orientation quirks
    }
    Camera.getPicture(options).then((imageData) => {

      this.profilePicture = "data:image/jpeg;base64," + imageData;

    }, (err) => {
      // Handle error
    });
  }
}