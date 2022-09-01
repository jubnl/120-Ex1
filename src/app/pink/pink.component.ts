import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pink',
  templateUrl: './pink.component.html',
  styleUrls: ['./pink.component.css']
})
export class PinkComponent implements OnInit {

  @Input() idNumber: string = "";
  @Input() index: string = "";

  @Input() btnUpDisabled: boolean = false;
  @Input() btnDownDisabled: boolean = false;

  @Output() delete: EventEmitter<string> = new EventEmitter();
  @Output() moveUp: EventEmitter<string> = new EventEmitter();
  @Output() moveDown: EventEmitter<string> = new EventEmitter();


  constructor() {
  }

  ngOnInit(): void {
  }

  deleteMe() {
    this.delete.emit(this.index);
  }

  moveMeUp() {
    this.moveUp.emit(this.index);
  }

  moveMeDown() {
    this.moveDown.emit(this.index);
  }
}
