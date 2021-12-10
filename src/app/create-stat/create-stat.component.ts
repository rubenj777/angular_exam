import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StatistiqueService } from '../statistique.service';
import { Statistique } from '../models/statistique';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-stat',
  templateUrl: './create-stat.component.html',
  styleUrls: ['./create-stat.component.scss'],
})
export class CreateStatComponent implements OnInit {
  public title!: string;
  public id!: string;
  public value!: number;
  constructor(public statService: StatistiqueService, public router: Router) {}

  submit(form: NgForm) {
    this.addStat();
    this.router.navigate(['/stat-list']);
  }

  addStat() {
    let newStat = new Statistique(this.title, this.id, this.value);
    this.statService.tabStat.push(newStat);
  }

  ngOnInit(): void {}
}
