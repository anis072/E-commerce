import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthentificationComponent } from './authentification/authentification.component';
import { RegisterComponent } from './register/register.component';
import { FeatContainerComponent } from './feat-container/feat-container.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AuthentificationComponent,
    RegisterComponent,
    FeatContainerComponent,


  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path:'',redirectTo:'/login',pathMatch:'full'
      },
      {
        path:'',component:FeatContainerComponent,children:[
          {
            path: 'login', component: AuthentificationComponent,
          },
          {
            path: 'register', component: RegisterComponent,
          },
        ]
      }


    ]),
  ]
})
export class FeaturesModule { }
