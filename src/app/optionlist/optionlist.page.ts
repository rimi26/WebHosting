import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-optionlist',
  templateUrl: './optionlist.page.html',
  styleUrls: ['./optionlist.page.scss'],
})
export class OptionlistPage implements OnInit {

  isDisabled:boolean=false;

  constructor(private router:Router) { 
  //   if(localStorage.getItem("filled")=="1"){
  //     console.log("Rimi");
  //     //this.isDisabled=true;
  //     //document.getElementById("item").style.color=#FFFFFF;
     
  //  }
  }

  ngOnInit() {

    //if(localStorage.getItem("filled")=="1"){
      //console.log("Rimi");
      //this.isDisabled=true;
      //document.getElementById("item").style.color=#FFFFFF;
     
   //}
    
  }

  locationDetails(){
   this.router.navigate(['home']);
  }

  prevpage(){
    this.router.navigate(['firstpage'])
  }

  mainbreaker(){
    if(localStorage.getItem("filled")=="1"){
    this.router.navigate(['mainsbreaker'])
    }
  }

  branchingbreaker(){
    if(localStorage.getItem("filled")=="1"){
    this.router.navigate(['branchingbreaker']);
    }

  }


}
