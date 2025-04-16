import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BuyComponent } from './buy/buy.component';
import { ContactComponent } from './contact/contact.component';
import { TestingComponent } from './testing/testing.component';
import { HelloComponent } from './hello/hello.component';
import { ProductComponent } from './product/product.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ChildpageComponent } from './childpage/childpage.component';
import { AssgnchildComponent } from './assgnchild/assgnchild.component';
import { AssgnparentComponent } from './assgnparent/assgnparent.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    BuyComponent,
    ContactComponent,
    TestingComponent,
    HelloComponent,
    ProductComponent,
    PagenotfoundComponent,
    ParentComponent,
    ChildComponent,
    LifecycleComponent,
    ChildpageComponent,
    AssgnchildComponent,
    AssgnparentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
