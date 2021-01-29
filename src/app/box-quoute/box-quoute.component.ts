import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-box-quoute',
  templateUrl: './box-quoute.component.html',
  styleUrls: ['./box-quoute.component.scss']
})
export class BoxQuouteComponent implements OnInit {

  @Input() quote: string
  @Input() author: string
  @Input() color: string

  constructor() { }

  ngOnInit() {
  }

}
