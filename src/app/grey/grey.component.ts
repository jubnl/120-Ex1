import {Component, OnInit} from '@angular/core';
import {PinkComponent} from "../pink/pink.component";

@Component({
  selector: 'app-grey',
  templateUrl: './grey.component.html',
  styleUrls: ['./grey.component.css']
})
export class GreyComponent implements OnInit {

  pinks: string[] = ["1", "2", "3", "4"]

  constructor() {
  }

  ngOnInit(): void {
  }

  deleteComponent($event: string) {
    this.pinks = this.pinks.filter(p => p !== this.pinks[parseInt($event)])
  }

  moveItemUp(indexStr: string) {
    const index = parseInt(indexStr);
    if (index === 0) {
      return;
    }
    [this.pinks[index - 1], this.pinks[index]] = [this.pinks[index], this.pinks[index - 1]];
  }

  moveItemDown(indexStr: string) {
    const index = parseInt(indexStr);
    if (index + 1 === this.pinks.length) {
      return;
    }
    [this.pinks[index + 1], this.pinks[index]] = [this.pinks[index], this.pinks[index + 1]];
  }

  addPinkItem() {
    // map array of string to array of int
    let newPink = this.pinks.map(s => {
      return parseInt(s)
    }).sort((n1, n2) => n1 - n2)[this.pinks.length - 1] + 1;

    if (isNaN(newPink)) {
      newPink = 1;
    }
    this.pinks.push(newPink.toString())
  }
}
