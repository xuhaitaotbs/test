import {Component, OnInit} from "@angular/core";
import  ProfileAction  from "./profile.action";
import { ProfileState } from "./profile.state";
import { ProfileStore } from "./profile.store";
import { NavController } from "ionic-angular/index";
import { TabsPage} from '../tabs/tabs';
import { Camera} from 'ionic-native';
import { ActionSheetController } from 'ionic-angular';
import { ActionSheet } from 'ionic-native';

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
         private navCtrl: NavController,
         private actionSheetCtrl: ActionSheetController) {
      this.ngOnInit();
  }

  public ngOnInit() {
     // this.action.init();
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
      destinationType: Camera.DestinationType.FILE_URI,
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
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image =  imageData;
      this.path = base64Image;//给全局的文件路径赋值。
      this.profilePicture=base64Image;//给image设置source。
      alert(this.path);

    /*  this.zone.run(() => this.image = base64Image);*/
    }, (err) => {
      // Handle error，出错后，在此打印出错的信息。
      alert( err.toString());
    });
  }
  public choosePhoto() {

    var options = {
      // Some common settings are 20, 50, and 100
      quality: 50,
      destinationType: Camera.DestinationType.FILE_URI,
      // In this app, dynamically set the picture source, Camera or photo gallery
      sourceType:0,//0对应的值为PHOTOLIBRARY ，即打开相册
      encodingType: Camera.EncodingType.JPEG,
      mediaType: Camera.MediaType.PICTURE,
      allowEdit: true,
      correctOrientation: true  //Corrects Android orientation quirks
    }
    Camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image =  imageData;
      this.path = base64Image;
      this.profilePicture=base64Image;
      alert(base64Image);
    }, (err) => {
      // Handle error
    });

  }
}