import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Web app ';
  users={
    name:"raj",
    user:"rajkumar",
    age:23
  }
input:any;
  parent(data: any){
    
    this.input=data;
    console.warn(this.input);
  }
}
