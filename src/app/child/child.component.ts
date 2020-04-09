import { Component, OnInit ,OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges{

  constructor() { }

  ngOnInit(): void {
  }

  @Input() title: string = 'I\'m a nested component';
    ngOnChanges(changes) {
    console.log('changes in child:' + JSON.stringify(changes));
  }

}
