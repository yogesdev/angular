import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CampaignComponent } from './campaign/campaign.component';
import { CreativeComponent } from './creative/creative.component';
import { ReportsComponent } from './reports/reports.component';
import { UserComponent } from '../user/user.component';
import { AddComponent } from './campaign/add/add.component';
import { EditComponent } from './campaign/edit/edit.component';
import { TextComponent } from './creative/text/text.component';
import { AdvertiserComponent } from './user/advertiser/advertiser.component';
import { PublisherComponent } from './user/publisher/publisher.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{ path: '', component: AdminComponent,

  children:[
    {path:'',component:DashboardComponent},
    {path:'campaigns', component:CampaignComponent},
    {path:'campaigns/add', component:AddComponent},
    {path:'campaigns/edit', component:EditComponent},
    {path:'creatives', component:CreativeComponent},
    {path:'creatives/text', component:TextComponent},
    {path:'reports', component:ReportsComponent},
    {path:'users', component:UserComponent},
    {path:'advertiser',component:AdvertiserComponent},
    {path:'publisher',component:PublisherComponent},
    {path:'login',component:LoginComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
