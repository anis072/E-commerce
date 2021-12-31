import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../../repositories/menu/menu.service';
declare var $ :any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menues:any;
  categories:any;
  constructor(private menuService:MenuService,
              private router:Router) { }

  ngOnInit(): void {
    this.getMenues();
    const $vertical_menu: any = $('.vertical-category-block');
    if ($vertical_menu.length) {
    $vertical_menu.biolife_vertical_menu();
  }

}
getMenues() {
  this.menuService.getMenues().subscribe({
    next: (data:any)=> {
      this.menues = data;
      console.log(this.menues)
    },
    error:(err:any)=> {
      console.log(err);
    }
  });

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
goToProductsInfo(id:number,idCat:number):void{
  this.router.navigate(['/product/'+id+'/'+idCat])
}
}
