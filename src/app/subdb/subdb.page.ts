import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { WebView } from '@awesome-cordova-plugins/ionic-webview/ngx';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';

@Component({
  selector: 'app-subdb',
  templateUrl: './subdb.page.html',
  styleUrls: ['./subdb.page.scss'],
})
export class SubdbPage implements OnInit {


  subdb:any="assets/subdb.jpg";
  subdbinside:any="assets/subdb_inside.jpg";

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


  constructor(private router:Router,private alertController:AlertController,private webview:WebView,private camera:Camera) { }

  ngOnInit() {
  }

  prevpage(){
  this.router.navigate(['evdedicatedprotection'])
  }

  option(){
    this.router.navigate(['optionlist'])
  }

  addlocation(){
    this.router.navigate(['earthing'])
  }

  async subdbimg(){

    
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
            this.subdb=finalimg;
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
            this.subdb=finalimg;
          });
        }
      },
    ],
    });
  
    await alert.present();
  
  
  }

  async subdbinsideimg(){

    
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
            this.subdbinside=finalimg;
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
            this.subdbinside=finalimg;
          });
        }
      },
    ],
    });
  
    await alert.present();
  
  
  }

  

}
