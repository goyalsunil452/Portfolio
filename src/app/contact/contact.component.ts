import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { serviceEndPoint } from '../app.service';
import { takeUntil } from 'rxjs/operators';
declare let Email: any;
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
    password : new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  })
  constructor(  
    private router: Router,
    private httpClient: HttpClient,
    private servicEndPoint : serviceEndPoint
    ) {
  }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.formData.value)
    this.servicEndPoint.postData(this.formData.value);
    this.servicEndPoint.messageData$.pipe(takeUntil(this.ngUnsubscribe)).subscribe((res:any) => {
      console.log("key",res)
     // this.getUserDataWithKey(res.name);
    });
    this.formData.reset();
  }

  // getUserDataWithKey(key:any){
  //   this.servicEndPoint.fetchData(key);
  //   this.servicEndPoint.messageData$.pipe(takeUntil(this.ngUnsubscribe)).subscribe((res:any) => {
  //     console.log("apidata",res)
  //   });
  // }
  sendEmail(){
    Email.send({
      SecureToken : ("69cac5aa-45a6-492b-b990-907414dec3b9").trim(),
      To : ('goyalsunil452@gmail.com').trim(),
      From : ("theashok452@gmail.com").trim(),
      Subject : ("This is the subject").trim(),
      Body : ("And this is the body").trim(),
     // SmtpClient.UseDefaultCredentials = false
      }).then(
        (message:any) => alert(message)
      );
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}

//ad9cfb78-91df-4a8c-b9e8-ec3611db35cd

