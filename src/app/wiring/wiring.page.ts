import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wiring',
  templateUrl: './wiring.page.html',
  styleUrls: ['./wiring.page.scss'],
})
export class WiringPage implements OnInit {
  wireType:any={};

  constructor(private router:Router) { }

  ngOnInit() {

    this.wireType=[
     {wire:"XLPE"},
    { wire:"PVC"},
     {wire:"OTHER"}
    ]
  }

  prevpage(){
    this.router.navigate(['earthing'])
    }
  
    home(){
      this.router.navigate(['optionlist'])
    }
  
    wiringImgs(){
      this.router.navigate(['wiringimages'])
    }

}
