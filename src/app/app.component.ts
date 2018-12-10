import { CategoryService } from './category.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'delicious-test';
  courses = ['Course 1', 'Course 2', 'Course 3', 'Course 4'];
  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
  this.categoryService.getConfig().subscribe(
      (data: any) => {console.log(data);}, // success path
      error => {console.log(error);} // error path
    );
  }

}
