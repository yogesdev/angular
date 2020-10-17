import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CampaignComponent } from './campaign/campaign.component';
import { AddComponent } from './campaign/add/add.component';
import { EditComponent } from './campaign/edit/edit.component';
import { AdvertiserComponent } from './user/advertiser/advertiser.component';
import { PublisherComponent } from './user/publisher/publisher.component';
import { ReportsComponent } from './reports/reports.component';
import { CreativeComponent } from './creative/creative.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { TitlebarComponent } from './layout/titlebar/titlebar.component';
import { TextComponent } from './creative/text/text.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [AdminComponent, DashboardComponent, CampaignComponent, AddComponent, EditComponent, AdvertiserComponent, PublisherComponent, ReportsComponent, CreativeComponent, SidebarComponent, TitlebarComponent, TextComponent, LoginComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
