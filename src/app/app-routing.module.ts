import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [

  {path: "main", component: MainComponent},
  {path: "dashboard", component: DashboardComponent},
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: '**',  component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
