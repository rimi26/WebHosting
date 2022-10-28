import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { WebView } from '@awesome-cordova-plugins/ionic-webview/ngx';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-mainsbreaker',
  templateUrl: './mainsbreaker.page.html',
  styleUrls: ['./mainsbreaker.page.scss'],
})
export class MainsbreakerPage implements OnInit {

  

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



  mainDistributionBoardImg:any='assets/main_circuit_breaker.jpg';
  mainBreakerImg:any='assets/main_distribution_board.jpg';

  constructor(private alertController: AlertController,private router:Router,private webview:WebView,private camera:Camera) { }

  ngOnInit() {
  }

  async mainBreaker(){

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
            this.mainBreakerImg=finalimg;
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
            this.mainBreakerImg=finalimg;
          });
        }
      },
    ],
    });
  
    await alert.present();
  
  }

  async mainDistributionBoard(){

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
            this.mainDistributionBoardImg=finalimg;
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
            this.mainDistributionBoardImg=finalimg;
          });
        }
      },
    ],
    });
  
    await alert.present();
  
  }

  prevpage(){
    this.router.navigate(['home']);
  }

  list(){
    this.router.navigate(['optionlist']);
  }

  branchingbreaker(){
    this.router.navigate(['branchingbreaker']);
  }

}
