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
