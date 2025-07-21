import { Component, OnInit} from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { SharedService } from 'src/app/shared/services/shared.service';
import { generateRandomInt } from 'src/app/utils/utils';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private _sharedService:SharedService, private _authService:AuthService, ) { }
  user:any;
  notificationCount = generateRandomInt;
  numberOfUser:any;

  ngOnInit(): void {
    this.user = this._authService.getLoggedInUser();
    this.getUser();
  }
  getUser(){
    this._authService.getUser().subscribe((data) => {
      this.numberOfUser = data;
    });
  }
  toggleSidebar(){
    this._sharedService.toggleSidebar();
  }
  handleSearch(query: string) {
    this._sharedService.setSearchQuery(query);
    
  }
  
}
