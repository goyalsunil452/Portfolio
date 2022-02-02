import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  data:any;
  // constructor(private db:AngularFireDatabase){
  //   this.db.list('/users').valueChanges().subscribe((users:any)=>{
  //      console.log(users);
  //   })
  // }
}
