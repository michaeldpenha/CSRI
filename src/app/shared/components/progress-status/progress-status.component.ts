import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-status',
  templateUrl: './progress-status.component.html',
  styleUrls: ['./progress-status.component.scss']
})
export class ProgressStatusComponent implements OnInit {

  @Input('progressStatus') progressStatus: string;
  constructor() { }
  
  ngOnInit() {
  }

}
