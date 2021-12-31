import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubHeaderComponent } from './ui/sub-header/sub-header.component';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { ContainerComponent } from './ui/container/container.component';
import { RouterModule } from '@angular/router';
import { MainSilderComponent } from './util-ui/main-silder/main-silder.component';
import { BannerComponent } from './util-ui/banner/banner/banner.component';
import { CategroyGridComponent } from './util-ui/categroy-grid/categroy-grid.component';
import { CategroyGridLeftComponent } from './util-ui/categroy-grid-left/categroy-grid-left.component';
import { CategroyGridrightComponent } from './util-ui/categroy-gridright/categroy-gridright.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    SubHeaderComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    MainSilderComponent,
    BannerComponent,
    CategroyGridComponent,
    CategroyGridLeftComponent,
    CategroyGridrightComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'',redirectTo:'/index',pathMatch:'full'
      },
      {
        path:'',component:ContainerComponent,children:[
          {
            path: 'index', component: MainSilderComponent,
          },
          {
            path: 'product/:id/:idCat',
            component: CategroyGridLeftComponent
          },
          {
            path: ':id/product/:idCat',
            component: CategroyGridrightComponent
          }
        ]
      }


    ]),
    HttpClientModule
  ],
  exports: [FooterComponent, HeaderComponent, SubHeaderComponent, MainSilderComponent]
})
export class SharedModule { }
