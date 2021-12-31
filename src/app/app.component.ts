import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const $pre_loader = $('#biof-loading');
    const $biolife_slide: any = $('.biolife-carousel');
    if ($pre_loader.length) {
      $pre_loader.fadeOut(800);
      setTimeout(function () {
        $pre_loader.remove();
      }, 3000);
    }
    if ($biolife_slide.length) {
      $biolife_slide.biolife_init_carousel();
    }
  }


}
