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

  dtOptions: any = {};

  ngOnInit() {

    this.dtOptions = {

          data: this.exerciseLists,
          columns: [{
            title: 'ID',
            data: 'id'
          }, {
            title: 'First name',
            data: 'description'
          }, {
            title: 'Last name',
            data: 'discipline'
          }],
          // Declare the use of the extension in the dom parameter
          dom: 'Bfrtip',
          // Configure the buttons
          buttons: [
            'columnsToggle',
            'colvis',
            'copy',
            'print',
            'excel',
            {
              text: 'Some button',
              key: '1',
              action: function (e, dt, node, config) {
                alert('Button activated');
              }
            }
          ]
        };

  }

}
