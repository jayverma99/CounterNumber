import { Component, EventEmitter, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  number:any = 0;
  @Output() numberChange = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  counterIncrease(){
    this.number = this.number+1;
    this.numberChange.emit(this.number); // 
  }

  decreaseNumber(){
    this.number = this.number-1;
    this.numberChange.emit(this.number); // 
  }

}
