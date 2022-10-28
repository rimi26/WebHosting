import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phaseselection',
  templateUrl: './phaseselection.page.html',
  styleUrls: ['./phaseselection.page.scss'],
})
export class PhaseselectionPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onephase(){
   this.router.navigate(['onephase']);
  }

  threephase(){
    this.router.navigate(['threephase']);
  }

  homepage(){
    this.router.navigate(['firstpage']);
  }

}
