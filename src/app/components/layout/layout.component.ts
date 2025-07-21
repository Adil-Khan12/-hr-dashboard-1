import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service'; 

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

isSidebarHidden = false;

  constructor(private _sharedService: SharedService,private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this._sharedService.sidebarHidden$.subscribe(hidden => {
      this.isSidebarHidden = hidden;
    });
    const width = window.innerWidth;
    const element = this.el.nativeElement.querySelector('.sidebar');

    if (width < 400) {
      this.renderer.addClass(element, 'hide');
    } else {
      this.renderer.addClass(element, 'show');
    }
  }
}
