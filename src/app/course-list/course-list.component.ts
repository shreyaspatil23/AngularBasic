import { Component, OnInit ,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  exportAs: 'courselist'
})
export class CourseListComponent  {

 @Output() OnRegister = new EventEmitter<string>();
courses = [
    { courseId: 1, courseName: 'Node JS' },
    { courseId: 2, courseName: 'Typescript' },
    { courseId: 3, courseName: 'Angular' },
    { courseId: 4, courseName: 'React JS' }
  ];

   course: any[];
  changeCourse(name: string) {
    this.course = [];
    for (let i = 0; i < this.courses.length; i++) {
      if (this.courses[i].courseName === name) {
        this.course.push(this.courses[i]);
      }
    }
  }

   register(courseName: string) {
    this.OnRegister.emit(courseName);
  }
}
