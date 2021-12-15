import { Component, OnInit, Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() hero:any;
@Output() parent : EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.warn(this.hero.name);
    
}
child(){
  let datainp={name:"hey",
  first:"i am"
  }
  this.parent.emit(datainp);
}
}
