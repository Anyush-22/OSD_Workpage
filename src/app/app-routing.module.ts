import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { DataViewPageComponent } from './data-view-page/data-view-page.component';
import { ApplicationPageComponent } from './application-page/application-page.component';

const routes: Routes = [
  {path:'',pathMatch:'full', redirectTo : 'login'},
  {path:'login', component: LoginPageComponent},
  {path:'osd', component: DataViewPageComponent},
  {path:'Application', component: ApplicationPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
