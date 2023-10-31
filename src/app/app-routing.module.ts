import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './dashboard/pages/home/home.component';
import { UsersComponent } from './dashboard/pages/users/users.component';
import { CoursesComponent } from './dashboard/pages/courses/courses.component';
import { UserDetailComponent } from './dashboard/pages/users/components/user-detail/user-detail.component';
import { SchedulesComponent } from './dashboard/pages/schedules/schedules.component';
import { GradesComponent } from './dashboard/pages/grades/grades.component';



const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'courses',
        component: CoursesComponent,
      },
      {
        path: 'schedules',
        component: SchedulesComponent,
      },
      {
        path: 'grades',
        component: GradesComponent,
      },
 
      {
        path: 'users',
        component: UsersComponent,
        children: [
          {
            path: 'detail/:id',
            component: UserDetailComponent
          }
        ]
      },

      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: '**',
    redirectTo: 'auth',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 