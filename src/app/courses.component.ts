import { CoursesService } from './courses.service';

import { Component } from "@angular/core";

@Component({
    selector:'courses', // <div class = "courses"></dev>
    template: `
        {{courses.title | uppercase | lowercase}} <br/>
        {{courses.rating | number }} <br/>
        {{courses.students | number:'1.1-3' }} <br/>
        {{courses.price | currency:'GBP':true}} <br/>
        {{courses.releaseDate | date : 'shortDate'}} <br/>
        {{courses.text | summary:20}}
        `
})

export class CoursesComponent {
    isActive = true;
    imageURL = "https://pluralsight2.imgix.net/paths/images/angular-14a0f6532f.png";
    title="List of Courses";
    courses = {
        title:"The Complete Full Stack Course",
        rating: 4.97,
        students: 30123.345,
        price: 123,
        releaseDate: Date.now(),
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ducimus omnis voluptates sed dolorum soluta id, dicta distinctio, ab provident atque delectus tempore quam blanditiis suscipit accusamus quos temporibus quaerat."
    };


    constructor(service:CoursesService){
        //this.courses = service.getCourses();
        //nned to create a common service to retrive courses form the beackend/server
    }

    getTitle(){
        return this.title.toUpperCase();
    }

    //courses = ["AI", "Data Science", "Big Data", "Algorithms", "Sys Admin"];
}