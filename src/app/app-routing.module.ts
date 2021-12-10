import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './component/main/main.component';
import { UserComponent } from './component/user/user.component';

const routes: Routes = [
  {
    path:'',redirectTo:'/mainPage',pathMatch:'full'
  },
  {
    path:'mainPage',component:MainComponent
  },
  {
    path:'userPage', component:UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
