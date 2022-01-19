import { AuthentificationService } from './../repositories/authentification/authentification.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  error!: string;
  submitted:boolean = false;
  constructor(private formBuilder: FormBuilder,
              private authentificationService: AuthentificationService,
              private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required],
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      mail:['',[Validators.required,Validators.email]],
      phone:['',Validators.required],
      role:[''],
    });
  }
  register(){
    this.submitted= true
    console.log(this.registerForm.value);
    if(this.registerForm.valid){
      this.authentificationService.register(this.registerForm.value).subscribe({
        next:data=> {
          this.router.navigate(['/auth/login'])
          console.log(data);
        },
        error:err=> {
          this.error = 'Password Or UserName Incorrect';
        }
      })
     }
    }
}
