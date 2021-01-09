import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-samplemaster',
  templateUrl: './samplemaster.component.html',
  styleUrls: ['./samplemaster.component.css'],
})
export class SamplemasterComponent implements OnInit {
  title = "I'm in the Common Shared File Module where every one can access"
  constructor() { }

  ngOnInit(): void {
  }

}
