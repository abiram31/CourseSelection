import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { NavBarComponent } from './nav-bar.component';
import { NotFoundComponent } from './not-found.component';
import { PersonListComponent } from './person-list.component';
import { PersonDetailComponent } from './person-detail.component';
import { CourseListComponent } from './course-list.component';
import { CartSelectedListComponent } from './cart-selected-list.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    NotFoundComponent,
    PersonListComponent,
    PersonDetailComponent,
    CourseListComponent,
    CartSelectedListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
