import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesModule } from './routes.module';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { DetailComponent } from './pages/detail/detail.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


@NgModule({
  declarations: [LoginComponent, DetailComponent, DashboardComponent],
  imports: [
    CommonModule,
    RoutesModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
