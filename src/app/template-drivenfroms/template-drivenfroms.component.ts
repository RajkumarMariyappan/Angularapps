import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-drivenfroms',
  templateUrl: './template-drivenfroms.component.html',
  styleUrls: ['./template-drivenfroms.component.css']
})
export class TemplateDrivenfromsComponent implements OnInit {
  constructor() { }

  
submit(data:any){
  console.log(data)
}
collect={nam:'raj@gmail.com',
pass:123456

}

  ngOnInit(): void {
  }

}
