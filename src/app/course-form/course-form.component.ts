import { Component } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent{

  course = new Course(1, 'Angular', '5 days','shreyaspatil@gmail.com');
  submitted = false;
  onSubmit() { this.submitted = true; }

}
