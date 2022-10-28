import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { WebView } from '@awesome-cordova-plugins/ionic-webview/ngx';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { Router } from '@angular/router';


@Component({
  selector: 'app-earthing',
  templateUrl: './earthing.page.html',
  styleUrls: ['./earthing.page.scss'],
})
export class EarthingPage implements OnInit {

  cameraOptions: CameraOptions = {
    quality: 100,
    allowEdit:false,
    correctOrientation:true,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  galleryOptions: CameraOptions = {
    sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,
    quality:100,
    allowEdit:true,
    correctOrientation:true,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  earthingTypeImg:any="assets/tt.jpeg"

  constructor(private alertController: AlertController,private router:Router,private webview:WebView,private camera:Camera) { }

  ngOnInit() {
  }

  async earthingType(){

    let alert = await this.alertController.create({
      header: 'Choose From:',
     
   
    buttons: [
      {
        text:'Camera',
        handler:()=>{
          this.camera.getPicture(this.cameraOptions).then(res=>{
            console.log('Response: ',res);
            let finalimg=this.webview.convertFileSrc(res);
            console.log('Final Image: ',finalimg);
            this.earthingTypeImg=finalimg;
          });
        }
      },
      {
        text:'Gallery',
        handler:()=>{
          this.camera.getPicture(this.galleryOptions).then(res=>{
            console.log('Response: ',res);
            let finalimg=this.webview.convertFileSrc(res);
            console.log('Final Image: ',finalimg);
            this.earthingTypeImg=finalimg;
          });
        }
      },
    ],
    });
  
    await alert.present();
  
  }

  prevpage(){
    if(localStorage.getItem("evdedicated")=="maindb"){
      this.router.navigate(['evdedicatedprotection'])
    }

    if(localStorage.getItem("evdedicated")=="subdb"){
      this.router.navigate(['subdb'])
    }
  }

  home(){
    this.router.navigate(['optionlist']) 
  }
  wiring(){
    this.router.navigate(['wiring']) 
  }

}
