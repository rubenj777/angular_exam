import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Statistique } from '../models/statistique';

@Component({
  selector: 'app-display-stat',
  templateUrl: './display-stat.component.html',
  styleUrls: ['./display-stat.component.scss'],
})
export class DisplayStatComponent implements OnInit {
  @Input() public stat!: Statistique;
  @Output() deleteStat = new EventEmitter<void>();

  constructor() {}

  delete() {
    this.deleteStat.emit();
    console.log('ok1');
  }

  ngOnInit(): void {}
}
