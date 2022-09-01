import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-orange',
  templateUrl: './orange.component.html',
  styleUrls: ['./orange.component.css']
})
export class OrangeComponent implements OnInit {

  @Input() idNumber: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
