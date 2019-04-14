import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { NavBarComponent } from './nav-bar.component';
import { NotFoundComponent } from './not-found.component';
import { PersonListComponent } from './person-list.component';
import { PersonDetailComponent } from './person-detail.component';
import { CourseListComponent } from './course-list.component';
import { CartSelectedListComponent } from './cart-selected-list.component';
import { JwtModule } from "@auth0/angular-jwt";
import { LoginComponent } from './login.component';
import { AuthService } from './auth.service';
import { GuardAuthService } from './guard-auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptTokenService } from "./intercept-token.service";
import { TokenViewComponent } from './token-view.component';
import { UserAccountActivateComponent } from './user-account-activate.component';
import { UserAccountCreateComponent } from './user-account-create.component';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

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
    LoginComponent,
    TokenViewComponent,
    UserAccountActivateComponent,
    UserAccountCreateComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        authScheme: 'JWT'
      }
    })
  ],
  providers: [
    AuthService,
    GuardAuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptTokenService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
