import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';
import { PersonListComponent } from './person-list.component';
import { PersonDetailComponent } from './person-detail.component';
import { CourseListComponent} from './course-list.component';
import { CartSelectedListComponent} from './cart-selected-list.component';
import { Student } from './dataModelClasses';
import { CartComponent} from './cart.component';
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'students', component: PersonListComponent},
  {path: 'students/:studentId', component: PersonDetailComponent},
  {path: 'courses', component: CourseListComponent},
  {path: 'cart', component: CartSelectedListComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
