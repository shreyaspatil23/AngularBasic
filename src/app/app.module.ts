import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { RepeatDirective } from './repeat.directive';
import { MessageDirective } from './message.directive';
import { FormsModule } from '@angular/forms';
import { SortPipe } from './sort.pipe';
import { CourseListComponent } from './course-list/course-list.component';
import { ChildComponent } from './child/child.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { EmailValidator } from './course-form/email.validator';
import { BookComponent } from './book/book.component';
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    RepeatDirective,
    MessageDirective,
    SortPipe,
    CourseListComponent,
    ChildComponent,
    FirstComponent,
    SecondComponent,
    CourseFormComponent,
    RegistrationFormComponent,
    EmailValidator,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent,HelloComponent],
  exports: [CourseListComponent],
})
export class AppModule { }
