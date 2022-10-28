import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-onephase',
  templateUrl: './onephase.page.html',
  styleUrls: ['./onephase.page.scss'],
})
export class OnephasePage implements OnInit {

  constructor(private router:Router,private alertController: AlertController) { }

  ngOnInit() {
  }

  newinstallation(){
    this.router.navigate(['phaseselection']);
  }

  async IECAlert() {
    const alert = await this.alertController.create({
      header: 'Message',
      
      message: 'You selected IEC as standard',
      buttons: [
       
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.router.navigate(['optionlist']);
          },
        },

        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            
          },
        },

      ],
    });

    await alert.present();
  }

  async NECAlert() {
    const alert = await this.alertController.create({
      header: 'Message',
      
      message: 'You selected NEC as standard',
      buttons: [
       
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.router.navigate(['optionlist']);
          },
        },

        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            
          },
        },

      ],
    });

    await alert.present();
  }


}
