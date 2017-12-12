import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'go-page-top',
  templateUrl: './page-top.component.html',
  styleUrls: ['./page-top.component.css']
})
export class PageTopComponent implements OnInit {

  @Input() title: string = ''
  @Input() subtitle:string = ''

  constructor() { }

  ngOnInit() {
  }

}
