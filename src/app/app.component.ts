import { Component } from '@angular/core';
import { Statistique } from './models/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  stat1 = new Statistique(
    'fa1f5f40-be3b-11eb-91ec-7f5875ecfb46',
    'Nombre de gâteaux que j`ai mangé aujourd`hui',
    1
  );
  stat2 = new Statistique(
    'ld1f5f40-ae3f-14eb-05gd-7q9875pefh28',
    'Nombre de cafards vivant dans ma chambre',
    56
  );
  stat3 = new Statistique(
    'ld1gdf40-re3d-56eb-89fd-8q3675pdfh4q',
    'Nombre de nombre dans le nombre',
    0
  );
  tabStat: any[] = [];
  constructor() {
    this.tabStat.push(this.stat1, this.stat2);
    setTimeout(() => {
      this.tabStat.push(this.stat3);
    }, 2000);
  }
}
