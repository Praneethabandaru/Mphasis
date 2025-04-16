import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BuyComponent } from './buy/buy.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ParentComponent } from './parent/parent.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { AssgnparentComponent } from './assgnparent/assgnparent.component';
import { AssgnchildComponent } from './assgnchild/assgnchild.component';

const routes: Routes = [
{
  path:'home',
  component:HomeComponent
},
{
  path:'login', 
  component:LoginComponent
},
{
  path:'register', 
  component:RegisterComponent
},
{
  path:'buy', 
  component:BuyComponent
},
{
  path:'contact', 
  component:ContactComponent
}, 
{
  path:'product', 
  component:ProductComponent
},
{
  path:'parent',
  component:ParentComponent
},
{
  path:'lifecycle',
  component:LifecycleComponent
},
{
  path:'',
  component:HomeComponent
},
{
  path:'**',
  component:PagenotfoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
