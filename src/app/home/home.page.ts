import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { WebView } from '@awesome-cordova-plugins/ionic-webview/ngx';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { SQLiteObject} from '@ionic-native/sqlite/ngx';
import {SQLite} from '@ionic-native/sqlite/ngx'
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private storage: SQLiteObject;

  country:string="";
  location:string="";
  address:string="";
  customername:string="";
  installername:string="";
  installationdate:string="";
  authorityname:string="";
  gridsupplytopology:string="";


  acgridsupplyImg:any;
  exterioroflocationImg:any;
  installerImg:any;


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

  constructor(private router:Router,private alertController:AlertController,private webview:WebView,private camera:Camera,private sqlite:SQLite,private http:HttpClient,private strg: Storage) {

  }

  ngOnInit(){
    this.acgridsupplyImg='assets/ac_grid_supply.jpg';
    this.exterioroflocationImg='assets/location_exterior.jpg';
    this.installerImg='assets/installer_photo.JPG';

    this.strg.create();

    this.strg.get('Country').then((val) => {
      this.country=val;
    });
    this.strg.get('Location').then((val) => {
      this.location=val;
    });
    this.strg.get('Address').then((val) => {
      this.address=val;
    });
    this.strg.get('CustomerName').then((val) => {
      this.customername=val;
    });
    this.strg.get('InstallerName').then((val) => {
      this.installername=val;
    });
    this.strg.get('InstallationDate').then((val) => {
      this.installationdate=val;
    });
    this.strg.get('AuthorityName').then((val) => {
      this.authorityname=val;
    });
    this.strg.get('GridSupplyTopology').then((val) => {
      this.gridsupplytopology=val;
    });
  }

 

  prevpage(){
    if(this.country=="" || this.location==""){
      localStorage.setItem("filled","0");
      
    }
    else{
      localStorage.setItem("filled","1");
    }
    this.router.navigate(['optionlist']);
  
  }

  async acgridsupply(){

    if(this.country=="" || this.location==""){
      this.locationAlert();
    }

    else{
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
            this.acgridsupplyImg=finalimg;
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
            this.acgridsupplyImg=finalimg;
          });
        }
      },
    ],
    });
  
    await alert.present();
  }
  }

  async exterioroflocation(){

    if(this.country=="" || this.location==""){
      this.locationAlert();
    }

  else{
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
            this.exterioroflocationImg=finalimg;
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
            this.exterioroflocationImg=finalimg;
          });
        }
      },
    ],
    });
  
    await alert.present();
  }
  
  }

  async installerimg(){
    if(this.country=="" || this.location==""){
      this.locationAlert();
    }

    else{

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
            this.installerImg=finalimg;
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
            this.installerImg=finalimg;
          });
        }
      },
    ],
    });
  
    await alert.present();
  }
  
  }

  addlocation(){
    if(this.country=="" || this.location==""){
      localStorage.setItem("filled","0");
      this.locationAlert();
    }
    else{
      localStorage.setItem("filled","1");
    console.log(this.country);
    console.log(this.location);
    console.log(this.address);
    console.log(this.customername);
    console.log(this.installername);
    console.log(this.installationdate);
    console.log(this.authorityname);
    console.log(this.gridsupplytopology);
   
    this.strg.set('Country',this.country);
    this.strg.set('Location',this.location);
    this.strg.set('Address',this.address);
    this.strg.set('CustomerName',this.customername);
    this.strg.set('InstallerName',this.installername);
    this.strg.set('InstallationDate',this.installationdate);
    this.strg.set('AuthorityName',this.authorityname);
    this.strg.set('GridSupplyTopology',this.gridsupplytopology);
    
    this.router.navigate(['mainsbreaker']);
    
    
    }
  }

 

  async locationAlert(){
    const alert = await this.alertController.create({
      header: 'Warning',
      
      message: 'Please Enter the Location name',
      buttons: ['CLOSE'],
    });

    await alert.present();
  }

  // createDatabase(){

  //   try{

  //     this.sqlite.create({
  //       name: 'data.db',
  //        location: 'default'
  //     })
  //       .then((db: SQLiteObject) => {
      
      
  //         db.executeSql('create table location(name VARCHAR(32))', [])
  //           .then(() =>{
  //             alert('Executed SQL');
  //            this.insertDB();
            
  //           }) .catch(e => alert(e));
             
      
      
  //       });
  //   }
  //   catch(e){
  //     alert(e);
  //   }

  //   // this.sqlite.create({
  //   //   name: 'data.db',
  //   //    location: 'default'
  //   // })
  //   //   .then((db: SQLiteObject) => {
    
    
  //   //     db.executeSql('create table location(name VARCHAR(32))', [])
  //   //       .then(() => alert('Executed SQL'))
  //   //       .catch(e => alert(e));
    
    
  //   //   })
  //   //   .catch(e => alert(e));
  // }

  // insertDB(){
  //   let data = ['Rimi'];
  //   return this.storage.executeSql('INSERT INTO location(name) VALUES (?)', data)
  //   .then(res => {
  //     alert("Data Inserted");
  //   }).catch((e)=>alert(e))
  // }
  

}
