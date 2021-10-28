import { SummaryPipe } from './summary.pipe';
import { EmployeeService } from './employee.service';
import { AuthorService } from './author.service';
import { CoursesService } from './courses.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { AuthorComponent } from './author/author.component';
import { FavComponent } from './fav/fav.component';
import { BootstrapTableComponent } from './bootstrap-table/bootstrap-table.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { UserSystemComponent } from './user-system/user-system.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorComponent,
    FavComponent,
    BootstrapTableComponent,
    ShoppingListComponent,
    SummaryPipe,
    UserSystemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CoursesService,
    AuthorService,
    EmployeeService
    //SINGLETON
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
