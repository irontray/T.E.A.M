import { DashboardService } from './components/dashboard/dashboard.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { NavBarComponent } from './components/common/nav-bar/nav-bar.component';
import { ManageRolesComponent } from './components/admin/manage-roles/manage-roles.component';
import { ManageUserComponent } from './components/admin/manage-user/manage-user.component';
import { UserListComponent } from './components/admin/user-list/user-list.component';
import { AddTaskComponent } from './components/task/add-task/add-task.component';
import { EditTaskComponent } from './components/task/edit-task/edit-task.component';
import { TaskListComponent } from './components/task/task-list/task-list.component';
import { ForgotPasswordComponent } from './components/user/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './components/user/change-password/change-password.component';
import { RegisterComponent } from './components/user/register/register.component';
import { LogoutComponent } from './components/user/logout/logout.component';
import { LoginComponent } from './components/user/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TaskService } from './services/task.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    ChangePasswordComponent,
    ForgotPasswordComponent,
    TaskListComponent,
    EditTaskComponent,
    AddTaskComponent,
    UserListComponent,
    ManageUserComponent,
    ManageRolesComponent,
    NavBarComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: DashboardComponent
      },
      // login
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent
      },
      {
        path: 'change-password',
        component: ChangePasswordComponent
      },
      {
        path: 'logout',
        component: LogoutComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      // tasks
      {
        path: 'task-list',
        component: TaskListComponent
      },
      {
        path: 'edit-task',
        component: EditTaskComponent
      },
      {
        path: 'add-task',
        component: AddTaskComponent
      }
    ])
  ],
  providers: [
    DashboardService,
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}