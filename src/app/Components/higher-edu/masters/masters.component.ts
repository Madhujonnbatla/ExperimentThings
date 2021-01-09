import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-masters',
  templateUrl: './masters.component.html',
  styleUrls: ['./masters.component.css']
})
export class MastersComponent implements OnInit {
  title="Hello Im in the child Module"

  constructor() { }

  ngOnInit(): void {
  }

}
