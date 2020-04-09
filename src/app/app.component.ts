import { Component,ViewEncapsulation,OnInit,  DoCheck, AfterContentInit, AfterContentChecked,
    AfterViewInit, AfterViewChecked,
    OnDestroy  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit,  DoCheck,
    AfterContentInit, AfterContentChecked,
    AfterViewInit, AfterViewChecked,
    OnDestroy{
  title = 'my-first-app sp';
  isAuthenticated: boolean;
  submitted = false;
  userName: string;
  onSubmit(name: string, password: string) {
    this.submitted = true;
    this.userName = name;
    if (name === 'admin' && password === 'admin') {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }
  }

  courses: any[] = [
    { id: 1, name: "TypeScript" },
    { id: 2, name: "Angular" },
    { id: 3, name: "Node JS" },
    { id: 1, name: "TypeScript" }
  ];

  value = 0;
  nextChoice() {
    this.value++;
  }

  colorName = 'yellow';
  color = 'red';

  colorName1 = 'red';
  fontWeight = 'bold';
  borderStyle = '1px solid black';

  isBordered = true;


myMessage = 'Hello, I am from attribute directive';

imgUrl = 'assets/imgs/carousel1.jpg';

 value1: string ="2";

 isValid: boolean=false;

 twoway: string = "Angular ng";

  show:boolean;

  message: string;
  courseReg(courseName: string) {
    this.message = `Your registration for ${courseName} is successful`;
  }


  data: string = 'Angular 2';
    ngOnInit() {
        console.log('Init');
    }
    ngDoCheck() {
        console.log('Change detected');
    }
    ngAfterContentInit() {
        console.log('After content init');
    }
    ngAfterContentChecked() {
        console.log('After content checked');
    }
    ngAfterViewInit() {
        console.log('After view init');
    }
    ngAfterViewChecked() {
        console.log('After view checked');
    }
     ngOnDestroy() {
        console.log('Destroy');
    }
  
}
