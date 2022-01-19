import { AuthentificationService } from './../repositories/authentification/authentification.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  loginForm!: FormGroup;
  submitted: boolean = false;
  error!:string;
  constructor( private fb: FormBuilder,
               private authentificationService: AuthentificationService,
               private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required],
    })
  }
  login():void {
     console.log('heeerre');
     this.submitted = true;
     if(this.loginForm.valid){
       console.log('herre');
      this.authentificationService.login(this.loginForm.value).subscribe({
        next:data=> {
           localStorage.setItem('token',data?.token);
           this.router.navigate(['/index']);
          console.log(data);
        },
        error:err=> {
          this.error = 'Password Or User Name Incorrect';
        }
      })
     }

  }

}
