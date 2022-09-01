import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-grey',
  templateUrl: './grey.component.html',
  styleUrls: ['./grey.component.css']
})
export class GreyComponent implements OnInit {

  pinks: number[] = [1, 2, 3, 4]

  constructor() {
  }

  ngOnInit(): void {
  }

  // catch delete event fired by a pink component
  deleteComponent(index: number) {
    this.pinks = this.pinks.filter(p => p !== this.pinks[index])
  }

  // catch move up event fired by a pink component
  moveItemUp(index: number) {
    if (index === 0) {
      return;
    }
    [this.pinks[index - 1], this.pinks[index]] = [this.pinks[index], this.pinks[index - 1]];
  }

  // catch move down event fired by a pink component
  moveItemDown(index: number) {
    if (index + 1 === this.pinks.length) {
      return;
    }
    [this.pinks[index + 1], this.pinks[index]] = [this.pinks[index], this.pinks[index + 1]];
  }

  addPinkItem() {
    // sort pinks and get the biggest element
    let newPink = this.pinks.sort((n1, n2) => n1 - n2)[this.pinks.length - 1] + 1;

    if (isNaN(newPink)) {
      newPink = 1;
    }
    this.pinks.push(newPink)
  }
}
