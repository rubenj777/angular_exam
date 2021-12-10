import { Component, Input, OnInit } from '@angular/core';
import { Statistique } from '../models/statistique';

@Component({
  selector: 'app-display-stat',
  templateUrl: './display-stat.component.html',
  styleUrls: ['./display-stat.component.scss'],
})
export class DisplayStatComponent implements OnInit {
  @Input() public statistique!: Statistique;

  constructor() {}

  ngOnInit(): void {}
}
