import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EmployeeService } from './employee.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private searchQuery$ = new BehaviorSubject<string>('');
  private _sidebarHidden = new BehaviorSubject<boolean>(false);
  sidebarHidden$ = this._sidebarHidden.asObservable();
  
  constructor(private employeeService: EmployeeService) {}
  

  toggleSidebar() {
    this._sidebarHidden.next(!this._sidebarHidden.value);
  }

  results$ = this.searchQuery$.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    switchMap((query) =>
      this.employeeService.getEmployees().pipe(
        map((employees) =>
          employees.filter((emp) =>
            emp.name.toLowerCase().includes(query.toLowerCase())
          )
        )
      )
    )
  );

  setSearchQuery(query: string) {
    this.searchQuery$.next(query);
  }

}
