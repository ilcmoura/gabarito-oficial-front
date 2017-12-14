import { Component, OnInit } from '@angular/core';

import { ListSubjectLevel } from './list-subject-level.model'

@Component({
  selector: 'go-list-subject-level',
  templateUrl: './list-subject-level.component.html',
  styleUrls: ['./list-subject-level.component.css']
})
export class ListSubjectLevelComponent implements OnInit {

    listSubjectLevel: ListSubjectLevel[] = [
      {id:"1", description: "lista 1", discipline: "Física", fileName: "asdasdas"},
      {id:"2", description: "lista 2", discipline: "Física", fileName: "asdasdas"},
      {id:"3", description: "lista 3", discipline: "Física", fileName: "asdasdas"},
      {id:"4", description: "lista 4", discipline: "Física", fileName: "asdasdas"},
      {id:"5", description: "lista 5", discipline: "Física", fileName: "asdasdas"},
    ]

    constructor() { }

    ngOnInit() {

    }
}
