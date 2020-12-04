import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
})
export class ButtonsComponent implements OnInit {
  private BUTTON_VALUE: string;
  private BUTTON_CLASS: string;

  constructor() {}

  public get buttonValue(): string {
    return this.BUTTON_VALUE;
  }
  @Input()
  public set buttonValue(buttonValue: string) {
    this.BUTTON_VALUE = buttonValue;
  }

  public get buttonClass(): string {
    return this.BUTTON_CLASS;
  }
  @Input()
  public set buttonClass(buttonClass: string) {
    this.BUTTON_CLASS = buttonClass;
  }

  @Output() emitSendValue = new EventEmitter<any>();

  ngOnInit(): void {}

  sendValue(value: string) {
    this.emitSendValue.emit(value);
  }
}
