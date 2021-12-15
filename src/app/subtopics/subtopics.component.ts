import { Component, OnInit } from '@angular/core';
import { blogs } from '../blog';
import { bloglist } from '../bloglist';




@Component({
  selector: 'app-subtopics',
  templateUrl: './subtopics.component.html',
  styleUrls: ['./subtopics.component.css']
})
export class SubtopicsComponent implements OnInit {
  blogs: bloglist[] = [];
  constructor() { }

  ngOnInit() {
    this.blogs=blogs;
  }

}
