import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HomeModule } from '../dashboard/pages/home/home.module';
import { FormsModule as FormsPageModule } from './pages/forms/forms.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { UsersModule } from './pages/users/users.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersTableComponent } from './pages/users/components/users-table/users-table.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { CoursesModule } from './pages/courses/courses.module';




@NgModule({
  declarations: [DashboardComponent, SidebarComponent, ToolbarComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    FormsPageModule,
    MatToolbarModule,
    MatIconModule,
    UsersModule,
    SharedModule,
    HomeModule,
    RouterModule,
    MatListModule,
    CoursesModule


  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}