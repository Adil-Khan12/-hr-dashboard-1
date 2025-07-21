import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/auth.service';
import { SharedService } from 'src/app/shared/services/shared.service';
import { generateRandomInt, getFirstNmae } from 'src/app/utils/utils';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, AfterViewInit {
  @ViewChild('switchMode') switchMode!: ElementRef;
  isHidden = false;
  menuItems = [
    
  { path: '/dashboard', icon: 'bx bxs-dashboard', label: 'Dashboard' },
  { path: '/employee', icon: 'bx bx-group', label: 'Employees' },
  // { path: '/analytics', icon: 'bx bxs-doughnut-chart', label: 'Analytics' },
  // { path: '/messages', icon: 'bx bxs-message-dots', label: 'Message' },
  // { path: '/team', icon: 'bx bxs-group', label: 'Team' }
];

  constructor(private router: Router, private _sharedService: SharedService, private auth: AuthService,private el: ElementRef, private renderer: Renderer2,private _authService: AuthService) {}
    user:any;
    notificationCount = generateRandomInt;
    firstName = getFirstNmae;
  

  ngOnInit(): void {
    this.user = this._authService.getLoggedInUser();

    this._sharedService.sidebarHidden$.subscribe((hidden) => {
      this.isHidden = hidden;
    });
    const width = window.innerWidth;
    const element = this.el.nativeElement.querySelector('#sidebar');

    if (width < 400) {
      this.renderer.addClass(element, 'hide');
    } else {
      this.renderer.addClass(element, 'show');
    }
  }

  
  isActive(path: string): boolean {
    return this.router.url === path;
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['auth/login']);
  }

  ngAfterViewInit() {
    fromEvent(this.switchMode.nativeElement, 'change')
      .pipe(map((event: any) => event.target.checked))
      .subscribe((isChecked: boolean) => {
        document.body.classList.toggle('dark', isChecked);
      });
  }
}
