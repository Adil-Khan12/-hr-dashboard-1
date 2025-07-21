  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';
  import { LayoutComponent } from './components/layout/layout.component';
import { AuthGuard } from './components/auth/guards/auth.guard';

  const routes: Routes = [
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    },
    {
      path: 'auth',
      loadChildren: () =>
        import('./components/auth/auth.module').then(m => m.AuthModule)
    },
    {
      path: '',
      component: LayoutComponent,
      canActivate: [AuthGuard],
      children: [
        {
          path: 'dashboard',
          loadChildren: () =>
            import('./components/dashboard/dashboard.module').then(m => m.DashboardModule)
        },
        {
          path: 'employee',
          loadChildren: () =>
            import('./components/employees/employees.module').then(m => m.EmployeesModule)
        },
      ]
    },
    {
      path: '**',
      redirectTo: 'dashboard'
    }
  ];  



  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
