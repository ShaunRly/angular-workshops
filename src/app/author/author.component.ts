import { AuthorService } from './../author.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  email:any;
  authors;
  isActive = false;
  colSpan="mg-8";

  constructor(service:AuthorService) {this.authors = service.getAuthors();}

  ngOnInit(): void {
  }

  onSubmit($event:any): void {
    console.log("Click", $event);
    this.isActive = this.isActive == false ? true : false;
  }

  onInput(): void {
    console.log(this.email)
  }

  
}
