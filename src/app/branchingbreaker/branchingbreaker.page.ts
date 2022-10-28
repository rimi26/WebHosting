import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { WebView } from '@awesome-cordova-plugins/ionic-webview/ngx';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-branchingbreaker',
  templateUrl: './branchingbreaker.page.html',
  styleUrls: ['./branchingbreaker.page.scss'],
})
export class BranchingbreakerPage implements OnInit {
  isVisible:boolean;
  data:any;

  checked:boolean=false;

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
  mainDistributionBoardImg:any='assets/branching_distribution_boardb.jpg';
  branchingBreakerImg:any='assets/branching_circuit_breaker.jpg';

  constructor(private alertController: AlertController,private router:Router,private webview:WebView,private camera:Camera) { }

  ngOnInit() {
    this.isVisible=false;
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

  async branchingBreaker(){

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
            this.branchingBreakerImg=finalimg;
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
            this.branchingBreakerImg=finalimg;
          });
        }
      },
    ],
    });
  
    await alert.present();
  
  }

  prevpage(){
    this.router.navigate(['mainsbreaker']);
  }

  home(){
    this.router.navigate(['optionlist']);
  }

  evdedicatedprotection(){
    this.router.navigate(['evdedicatedprotection']);
  }

  // isChecked(){
  //   //console.log(this.checked);
  //   this.isVisible=true;
  // }

}
