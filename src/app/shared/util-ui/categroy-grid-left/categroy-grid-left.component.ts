import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from '../../repositories/menu/menu.service';
declare var $ :any;
@Component({
  selector: 'app-categroy-grid-left',
  templateUrl: './categroy-grid-left.component.html',
  styleUrls: ['./categroy-grid-left.component.css']
})
export class CategroyGridLeftComponent implements OnInit, AfterViewInit {
   id:any;
   products:any;
   productsPromo:any;
   categories:any;
  constructor(private route:ActivatedRoute,
              private menuService:MenuService,
              private router:Router) {

   }
  ngAfterViewInit(): void {
    const $biolife_slide: any = $('.biolife-carousel');
    console.log('after')
    if ($biolife_slide.length) {
      $biolife_slide.biolife_init_carousel();
      console.log('after1')
    }
  }

  ngOnInit(): void {
    const $biolife_slide: any = $('.biolife-carousel');
    if ($biolife_slide.length) {
      console.log('after1');
      $biolife_slide.biolife_init_carousel();
    }
    this.route.params.subscribe(paramsId => {
      this.id = paramsId.id
      this.getProductsInfo()
      this.getCategories(paramsId.idCat)
      console.log('after2')
  });
    //this.getProductsInfo();
  }
  getProductsInfo(){
    this.menuService.getProduct(this.id).subscribe({
      next:(data:any)=> {
        this.productsPromo = data.filter((item:any)=> item?.promo != null)
        this.products = data;
        console.log(data);
      }
    })
  }
  redirectLeft(){
    this.router.navigate(['/product/'+this.id])
  }
  redirectRight(){
    this.router.navigate([this.id+'/product/'])
  }
  getCategories(id:number){
    this.menuService.getCategoriesById(id).subscribe({
      next: (data:any)=> {
        this.categories = data;
        console.log(this.categories)
      },
      error:(err:any)=> {
        console.log(err);
      }
    })
  }
}
