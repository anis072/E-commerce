import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot([
      {
        path:'',
        loadChildren : ()=> import('src/app/shared/shared.module').then((m)=>m.SharedModule)
      },
      {
        path:'auth',
        loadChildren:()=> import('src/app/features/features.module').then((m)=>m.FeaturesModule)
      }
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
