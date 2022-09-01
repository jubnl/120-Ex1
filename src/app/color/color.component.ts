import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

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

  @Input() addBtnEnabled: boolean = false;
  @Input() moveBtnEnabled: boolean = false;
  @Input() deleteBtnEnabled: boolean = false;

  @Input() colorName: string = "";
  @Input() cssClasses: string = "";

  idNumberDisplay: string = "";
  @Input() pinkComponent: boolean = false;
  pinks: number[] = [];
  @Input() orangeComponent: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    if (this.idNumber) {
      this.idNumberDisplay = this.idNumber.toString()
    }
    if (this.pinkComponent) {
      this.pinks = [1, 2, 3, 4];
    }
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

  // catch delete event fired by a pink component
  deleteComponent(index: number) {
    this.pinks.splice(index, 1);
  }

  // catch move event fired by a pink component
  moveItem(index: number, down: boolean) {
    let tmpIndex: number;
    if (down) {
      tmpIndex = index + 1;
    } else {
      tmpIndex = index - 1;
    }

    // inverse 2 elements in array
    [this.pinks[tmpIndex], this.pinks[index]] = [this.pinks[index], this.pinks[tmpIndex]];
  }

  addPinkItem() {
    let newPink = 1;

    if (this.pinks.length) {
      // get the largest element in array and add 1 to it
      newPink = Math.max(...this.pinks) + 1;
    }
    this.pinks.push(newPink)
  }
}
