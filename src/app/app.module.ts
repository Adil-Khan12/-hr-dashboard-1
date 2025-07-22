import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeesModule } from './components/employees/employees.module';
import { TooltipDirective } from './directives/tooltip.directive';
import { LoginComponent } from './components/auth/login/login.component';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './shared/component/button/button.component';
import { PerformanceChartComponent } from './shared/component/performance-chart/performance-chart.component';
import { EmployeeTableComponent } from './shared/component/employee-table/employee-table.component';
import { UserDropdownComponent } from './shared/component/user-dropdown/user-dropdown.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    DashboardComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    EmployeesComponent,
    TooltipDirective,
    LoginComponent,
    ButtonComponent,
    PerformanceChartComponent,
    EmployeeTableComponent,
    UserDropdownComponent,
    ClickOutsideDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EmployeesModule,
    DashboardModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
