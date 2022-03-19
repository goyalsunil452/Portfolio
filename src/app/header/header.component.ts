import { Component, HostListener, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit,OnDestroy {
  scrollY=true;
  openMenuFlag=false;
  constructor(private renderer2: Renderer2) { 
   
  }
  
  ngOnInit(): void {
    console.log(this.scrollY);
    window.onscroll = () => {
      if(window.scrollY>20){
        this.scrollY=false;
      }else{
        this.scrollY=true;
      }
    }
  }
  openMenu(){
    this.openMenuFlag=!this.openMenuFlag;
  }
  ngOnDestroy(): void {
  }
}
