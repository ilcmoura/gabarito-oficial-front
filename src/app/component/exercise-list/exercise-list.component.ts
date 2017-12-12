import { Component, OnInit } from '@angular/core';

import { ExerciseList } from './exercise-list.model'

@Component({
  selector: 'go-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})
export class ExerciseListComponent implements OnInit {

  exerciseLists: ExerciseList[] = [
    {id:"1", description: "lista 1", discipline: "Física", exclusive: true, fileName: "asdasdas"},
    {id:"2", description: "lista 2", discipline: "Física", exclusive: true, fileName: "asdasdas"},
    {id:"3", description: "lista 3", discipline: "Física", exclusive: true, fileName: "asdasdas"},
    {id:"4", description: "lista 4", discipline: "Física", exclusive: true, fileName: "asdasdas"},
    {id:"5", description: "lista 5", discipline: "Física", exclusive: true, fileName: "asdasdas"},
  ]

  constructor() { }

  ngOnInit() {
  }

}
