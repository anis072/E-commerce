import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../../repositories/menu/menu.service';
declare var $: any;

@Component({
  selector: 'app-categroy-grid',
  templateUrl: './categroy-grid.component.html',
  styleUrls: ['./categroy-grid.component.css'],
})
export class CategroyGridComponent implements OnInit {
  id: any;
  products: any;
  constructor(private route: ActivatedRoute, private menuService: MenuService) {
    this.route.params.subscribe((paramsId) => {
      this.id = paramsId.id;
      this.getProductsInfo();
    });
  }
  ngOnInit(): void {
    const $biolife_slide: any = $('.biolife-carousel');
    if ($biolife_slide.length) {
      $biolife_slide.biolife_init_carousel();
    }
  }
  getProductsInfo() {
    this.menuService.getProduct(this.id).subscribe({
      next: (data: any) => {
        this.products = data;
        console.log(data);
      },
    });
  }
}
