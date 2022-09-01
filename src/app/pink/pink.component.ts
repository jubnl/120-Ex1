import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pink',
  templateUrl: './pink.component.html',
  styleUrls: ['./pink.component.css']
})
export class PinkComponent implements OnInit {

  // index and number that need to be displayed
  @Input() idNumber: number = 0;
  @Input() index: number = 0;

  // if the buttons is enabled/disabled
  @Input() btnUpDisabled: boolean = false;
  @Input() btnDownDisabled: boolean = false;

  // event that are fired when someone press on the buttons
  @Output() delete: EventEmitter<number> = new EventEmitter();
  @Output() moveUp: EventEmitter<[number, boolean]> = new EventEmitter();
  @Output() moveDown: EventEmitter<[number, boolean]> = new EventEmitter();


  constructor() {
  }

  ngOnInit(): void {
  }

  // fire delete event
  deleteMe() {
    this.delete.emit(this.index);
  }

  // fire move up event
  moveMeUp() {
    this.moveUp.emit([this.index, true]);
  }

  // fire move down event
  moveMeDown() {
    this.moveDown.emit([this.index, false]);
  }
}
