import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DetailComponent } from './recipes/detail/detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DetailComponent,
    AuthComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    CoreModule
  ],
  
  bootstrap: [AppComponent],
  // entryComponents: [
  //   AlertComponent
  // ]
})
export class AppModule { }
