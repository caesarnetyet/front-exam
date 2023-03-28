import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulariosComponent } from './components/users/formularios/formularios.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { BearerInterceptor } from './interceptor/bearer.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    FormulariosComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
   {
    provide: HTTP_INTERCEPTORS, useClass: BearerInterceptor, multi: true
   }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
