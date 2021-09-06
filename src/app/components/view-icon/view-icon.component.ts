import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-view-icon',
  templateUrl: './view-icon.component.html',
  styleUrls: ['./view-icon.component.less']
})
export class ViewIconComponent implements OnInit {
  @Input() url: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
