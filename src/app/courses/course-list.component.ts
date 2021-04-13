import { Component, OnInit } from  '@angular/core';
import { Course } from './course';

@Component({
    selector:'app-course-list',
    templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit{
    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [            
            {
                id: 1,
                name: "Curso de Angular",
                imageUrl: "assets/images/forms.png",
                price: 22.90,
                code: "AXL-021",
                duration: 94,
                rating: 4.3
            },
            {
                id: 2,
                name: "Curso de PHP",
                imageUrl: "assets/images/http.png",
                price: 32.90,
                code: "AXL-120",
                duration: 24,
                rating: 3.8
            }
        ]
    }
}