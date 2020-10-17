import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { TitlebarComponent } from './titlebar/titlebar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserlayoutComponent } from './userlayout/userlayout.component';


@NgModule({
  declarations: [UserComponent, TitlebarComponent, SidebarComponent, DashboardComponent, UserlayoutComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports:[
    UserComponent,
    TitlebarComponent,
    SidebarComponent,
    DashboardComponent
  ]
})
export class UserModule { }
