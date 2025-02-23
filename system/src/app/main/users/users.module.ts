import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesModule } from './routes.module';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { DetailComponent } from './pages/detail/detail.component';


@NgModule({
  declarations: [LoginComponent, DetailComponent],
  imports: [
    CommonModule,
    RoutesModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
