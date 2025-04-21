import { ErrorHandler, NgModule } from '@angular/core';
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
import { MyglobalerrorService } from './myglobalerror.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DiscountPipe } from './discount.pipe';
import { LogoutComponent } from './logout/logout.component';
import { ReverseComponent } from './reverse/reverse.component';
import { RevPipe } from './rev.pipe';
import { WordcountPipe } from './wordcount.pipe';
import { RxdemoComponent } from './rxdemo/rxdemo.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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
    DiscountPipe,
    LogoutComponent,
    ReverseComponent,
    RevPipe,
    WordcountPipe,
    RxdemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [
    {provide:ErrorHandler,useClass:MyglobalerrorService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
