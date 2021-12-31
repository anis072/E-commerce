import { Component, OnInit } from '@angular/core';
declare var $ :any;
@Component({
  selector: 'app-main-silder',
  templateUrl: './main-silder.component.html',
  styleUrls: ['./main-silder.component.css']
})
export class MainSilderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const $biolife_slide: any = $('.biolife-carousel');
    if ($biolife_slide.length) {
      $biolife_slide.biolife_init_carousel();
    }
  }
}

