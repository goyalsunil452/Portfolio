import { Component, HostListener, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { NgModule } from '@angular/core';
// window.onscroll = function() {myFunction()};

// var header = document.getElementById("navbar");
// if(header!=null){
//   var sticky = header.offsetTop;
// }

// function myFunction() {
//   if (window.pageYOffset > sticky && header!=null) {
//     console.log(header);
//     header.classList.add("sticky");
//   } else if(window.pageYOffset < sticky && header!=null){
//     console.log(header);
//     header.classList.remove("sticky");
//   }
// }
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit,OnDestroy {
  scrollY=true;
  constructor(private renderer2: Renderer2) { 
   
  }
  
  ngOnInit(): void {
    console.log(this.scrollY);
    window.onscroll = () => {
      console.log(window.scrollY)
      if(window.scrollY>20){
        this.scrollY=false;
      }else{
        this.scrollY=true;
      }
    }
  }

  ngOnDestroy(): void {
  }
}
