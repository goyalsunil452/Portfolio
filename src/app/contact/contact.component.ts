import { AlertService } from './../@core/toaster/alert.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { serviceEndPoint } from '../app.service';
import { takeUntil } from 'rxjs/operators';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { getDatabase, ref, set, connectDatabaseEmulator, get, child  } from "firebase/database";
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
declare let Email: any;
const app = initializeApp(environment.firebase);
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
  ngUnsubscribe = new Subject<void>();
  formData = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email:new FormControl('', [Validators.required, Validators.email]),
    subject:new FormControl(''),
    message:new FormControl(''),
    // password : new FormControl('', [
    //   Validators.required,
    //   Validators.minLength(5),
    // ]),
  })
  constructor(  
    private router: Router,
    private httpClient: HttpClient,
    private servicEndPoint : serviceEndPoint,
    private dialog: MatDialog,
    private alterService: AlertService,
    ) {
      const db = getDatabase();
      console.log('db',db);
      const database = getDatabase(app);
      console.log('database',database);
      const dbRef = ref(getDatabase(),'users');
      console.log('ref',dbRef);
      // database.ref('user')
      // .once('child_added', (data:any) => console.log(data))
      // database.list('/users').subscribe((user:any)=>{
      //   console.log(user)
      // })
      get(child(dbRef, `users`)).then((snapshot) => {
        if (snapshot.exists()) {
          console.log('wdadad',snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      //set(ref(db), null);
      //const db = getDatabase();
      // if (location.hostname === "localhost") {
      //   // Point to the RTDB emulator running on localhost.
      //   connectDatabaseEmulator(db, "localhost", 9000);
      // } 
  }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.formData.value)
    if(this.formData.value.name && this.formData.value.email 
      && this.formData.value.subject && this.formData.value.message){
      this.servicEndPoint.postData(this.formData.value);
      this.servicEndPoint.messageData$.pipe(takeUntil(this.ngUnsubscribe)).subscribe((res:any) => {
        console.log("key",res)
       // this.getUserDataWithKey(res.name);
      });
      this.formData.reset();
  
      this.alterService.showToastr('Saved Successfully!','Success','success');
    }else {
      this.alterService.showToastr('Please fill in all required fields','Error','error');
    }

    // setTimeout(() => {
    //   alert("Data Saved Successfully!")
    // }, 100);
  }

  // getUserDataWithKey(key:any){
  //   this.servicEndPoint.fetchData(key);
  //   this.servicEndPoint.messageData$.pipe(takeUntil(this.ngUnsubscribe)).subscribe((res:any) => {
  //     console.log("apidata",res)
  //   });
  // }


  // sendEmail(){
  //   Email.send({
  //     SecureToken : ("69cac5aa-45a6-492b-b990-907414dec3b9").trim(),
  //     To : ('goyalsunil452@gmail.com').trim(),
  //     From : ("theashok452@gmail.com").trim(),
  //     Subject : ("This is the subject").trim(),
  //     Body : ("And this is the body").trim(),
  //    // SmtpClient.UseDefaultCredentials = false
  //     });
  // }

  // openDialog(mydialog: TemplateRef<any>): void {
  //   const dialogRef = this.dialog.open(mydialog, {
  //     width: '250px'});
  
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}

//ad9cfb78-91df-4a8c-b9e8-ec3611db35cd

