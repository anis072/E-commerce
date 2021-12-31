import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from '../../repositories/menu/menu.service';
declare var $ :any;

@Component({
  selector: 'app-categroy-gridright',
  templateUrl: './categroy-gridright.component.html',
  styleUrls: ['./categroy-gridright.component.css']
})
export class CategroyGridrightComponent implements OnInit {
  categories:any;
  id: any;
  products: any;
  productsPromo:any;
  constructor(private route: ActivatedRoute, private menuService: MenuService,private router:Router) {
    this.route.params.subscribe((paramsId) => {
      this.id = paramsId.id;
      this.getProductsInfo();
      this.getCategories(paramsId.idCat)
    });
  }
  ngOnInit(): void {
    const $biolife_slide: any = $('.biolife-carousel');
    if ($biolife_slide.length) {
      console.log('init')
      $biolife_slide.biolife_init_carousel();
    }
  }
  getProductsInfo() {
    this.menuService.getProduct(this.id).subscribe({
      next: (data: any) => {
        const $biolife_slide: any = $('.biolife-carousel');
         if ($biolife_slide.length) {
           console.log('here');
           $biolife_slide.biolife_init_carousel();
        }
        this.productsPromo = data.filter((item:any)=> item?.promo != null)
        this.products = data;
        console.log(data);
      },
    });
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
