import { Component, OnInit } from '@angular/core';
import { Statistique } from '../models/statistique';
import { StatistiqueService } from '../statistique.service';

@Component({
  selector: 'app-stat-list',
  templateUrl: './stat-list.component.html',
  styleUrls: ['./stat-list.component.scss'],
})
export class StatListComponent implements OnInit {
  tabStat: Statistique[] = [];

  constructor(public statService: StatistiqueService) {
    this.tabStat = this.statService.tabStat;
  }
  delete(statistique: Statistique) {
    let index = this.tabStat.indexOf(statistique);
    this.tabStat.splice(index, 1);
    console.log('ok');
  }

  ngOnInit() {
    this.statService.getData().subscribe((response) => {
      console.log(response);
      for (const r of response as any) {
        this.tabStat.push(new Statistique(r.id, r.title, r.value));
      }
    });
  }
}
