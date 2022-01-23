import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openUrls(url:any){
    const w =  window.open(url, '_blank');
    if (w) {
        w.focus(); // okay now
    }
  }

}
