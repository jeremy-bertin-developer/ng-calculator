import { DataBase } from './../../core/util/data-base';
import { ViewsServiceService } from './../views-service.service';
import { Button } from './../../core/util/button';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator-wrapper',
  templateUrl: './calculator-wrapper.component.html',
  styleUrls: ['./calculator-wrapper.component.css'],
})
export class CalculatorWrapperComponent implements OnInit {
  buttonsFirstRow: Button[];

  result: number;

  tempViewNumber: number;
  tempNumber: string;
  firstCalculation: boolean;
  previousOperator: string;
  actualOperator: string;

  ngOnInit() {
    this.result = 0;
    this.tempViewNumber = 0;
    this.tempNumber = '0';
    this.firstCalculation = true;
    this.previousOperator = '';
    this.getButtonsFirstRow();
  }

  constructor(private viewsService: ViewsServiceService) {}

  getButtonsFirstRow(): void {
    this.viewsService.getDatas(DataBase.buttonsFirstRow).subscribe((x) => {
      this.buttonsFirstRow = x;
    });
  }

  handleValues(value: string): void {
    this.handleNumbers(value);
    this.handleEqual(value);
    this.heandleEraseAndOperators(value);
  }

  handleNumbers(value: string): void {
    if (
      value === '1' ||
      value === '2' ||
      value === '3' ||
      value === '4' ||
      value === '5' ||
      value === '6' ||
      value === '7' ||
      value === '8' ||
      value === '9' ||
      value === '0' ||
      value === '.'
    ) {
      this.tempNumber += value;
      this.tempViewNumber = Number(this.tempNumber);
    }
  }

  handleEqual(value: string): void {
    if (value === '=') {
      // tslint:disable-next-line: no-unused-expression
      this.previousOperator === '+' ? this.additionCalculation() : null;
      // tslint:disable-next-line: no-unused-expression
      this.previousOperator === '-' ? this.substractionCalculation() : null;
      // tslint:disable-next-line: no-unused-expression
      this.previousOperator === '/' ? this.divisionCaluclation() : null;
      // tslint:disable-next-line: no-unused-expression
      this.previousOperator === '*' ? this.multiplicationCalculation() : null;
      this.previousOperator = '';
    }
  }

  heandleEraseAndOperators(value: string): void {
    if (value === 'AC') {
      this.firstCalculation = true;
      this.tempNumber = '0';
      this.tempViewNumber = 0;
      this.result = 0;
      this.actualOperator = '';
      this.previousOperator = '';
    } else if (value === '+' || value === '-' || value === '/' || value === '*') {
      this.handleCalculation(value);
    }
  }

  handleCalculation(value: any): void {
    if (this.firstCalculation) {
      this.result = this.tempViewNumber;
      this.tempViewNumber = 0;
      this.tempNumber = '0';
      this.firstCalculation = false;
    }
    this.actualOperator = value;

    switch (this.previousOperator) {
      case '+':
        this.additionCalculation();
        break;
      case '-':
        this.substractionCalculation();
        break;
      case '/':
        this.divisionCaluclation();
        break;
      case '*':
        this.multiplicationCalculation();
        break;
      default:
        break;
    }

    this.previousOperator = this.actualOperator;
  }

  additionCalculation(): void {
    this.result += Number(this.tempNumber);
    this.result = Math.round((this.result + Number.EPSILON) * 100) / 100;
    this.tempViewNumber = 0;
    this.tempNumber = '0';
  }

  substractionCalculation(): void {
    this.result -= Number(this.tempNumber);
    this.result = Math.round((this.result + Number.EPSILON) * 100) / 100;
    this.tempViewNumber = 0;
    this.tempNumber = '0';
  }

  divisionCaluclation(): void {
    this.result /= Number(this.tempNumber);
    this.result = Math.round((this.result + Number.EPSILON) * 100) / 100;
    this.tempViewNumber = 0;
    this.tempNumber = '0';
  }

  multiplicationCalculation(): void {
    this.result *= Number(this.tempNumber);
    this.result = Math.round((this.result + Number.EPSILON) * 100) / 100;
    this.tempViewNumber = 0;
    this.tempNumber = '0';
  }
}
