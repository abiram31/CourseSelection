import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';
import { PersonListComponent } from './person-list.component';
import { PersonDetailComponent } from './person-detail.component';
import { CourseListComponent} from './course-list.component';
import { CartSelectedListComponent} from './cart-selected-list.component';
import { GuardAuthService } from './guard-auth.service';
import { Student } from './dataModelClasses';
import {UserAccountActivateComponent} from './user-account-activate.component';
import {UserAccountCreateComponent} from './user-account-create.component';
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'students', component: PersonListComponent},
  {path: 'students/:studentId', component: PersonDetailComponent, canActivate: [GuardAuthService]},
  {path: 'students/:userName', component: PersonDetailComponent, canActivate: [GuardAuthService]},
  {path: 'courses', component: CourseListComponent},
  {path: 'cart', component: CartSelectedListComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'activate', component: UserAccountActivateComponent},
  {path: 'create', component: UserAccountCreateComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
