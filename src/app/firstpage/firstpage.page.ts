import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.page.html',
  styleUrls: ['./firstpage.page.scss'],
})
export class FirstpagePage implements OnInit {

  constructor(private router:Router,private storage:Storage) { }

  ngOnInit() {
    localStorage.setItem("filled","0");
    this.storage.create();
    this.storage.clear();
  }

  newinstallation(){
   this.router.navigate(['phaseselection']);
  }

}
