import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { WebView } from '@awesome-cordova-plugins/ionic-webview/ngx';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';

@Component({
  selector: 'app-evdedicatedprotection',
  templateUrl: './evdedicatedprotection.page.html',
  styleUrls: ['./evdedicatedprotection.page.scss'],
})
export class EvdedicatedprotectionPage implements OnInit {

  image:any="assets/evse_rcd_rcbo.jpg";

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

  protection:any="";
  isVisible:boolean=false;
  protectionDevices:any="";

  constructor(private router:Router,private alertController:AlertController,private webview:WebView,private camera:Camera) { }

  ngOnInit() {
  }

  prevpage(){
    this.router.navigate(['branchingbreaker']);
  }

  home(){
    this.router.navigate(['optionlist']);
  }

  branchingbreaker(){
    if(this.protection=="maindb"){
      localStorage.setItem("evdedicated","maindb")
      this.router.navigate(['earthing']);
    }
    if(this.protection=="subdb"){
      localStorage.setItem("evdedicated","subdb")
      this.router.navigate(['subdb']);
    }
    else{
      localStorage.setItem("evdedicated","maindb")
      this.router.navigate(['earthing']);
    }
    
   
  }

  async Image(){

    
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
            this.image=finalimg;
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
            this.image=finalimg;
          });
        }
      },
    ],
    });
  
    await alert.present();
  
  
  }

}
