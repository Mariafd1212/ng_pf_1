import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { UsersComponent } from './pages/users/users.component';
import { UserDetailComponent } from './pages/users/components/user-detail/user-detail.component';
import { DashboardComponent } from './dashboard.component';
import { CoursesDetailComponent } from './pages/courses/components/courses-detail/courses-detail.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'dashboard', 
        component: DashboardComponent,
        children: [
          {
            path: 'dashboard/home', 
            component: HomeComponent,
          },

          {
            path: 'dashboard/courses',

            loadChildren: () =>
              import('./pages/courses/courses.module').then(
                (m) => m.CoursesModule
              ),
          },

          {
            path: 'users',
            loadChildren: () =>
              import('./pages/users/users.module').then((m) => m.UsersModule),
          },

           {
             path: 'courses',
             component: CoursesComponent,
           },
           {
             path: 'courses-detail/:id',
             component: CoursesDetailComponent,
           },

           {
            path: 'users',
             component: UsersComponent,
           },
           {
            path: 'users/detail/:id',
             component: UserDetailComponent,
          },
          {
            path: '**',
            redirectTo: 'home',
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}