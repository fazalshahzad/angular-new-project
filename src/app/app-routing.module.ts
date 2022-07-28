import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './MainPortal/about/about.component';
import { BlogComponent } from './MainPortal/blog/blog.component';
import { ContactComponent } from './MainPortal/contact/contact.component';
import { HomeComponent } from './MainPortal/home/home.component';
import { ShopComponent } from './MainPortal/shop/shop.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'blog',component:BlogComponent},
  {path:'contact',component:ContactComponent},
  {path:'shop',component:ShopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
