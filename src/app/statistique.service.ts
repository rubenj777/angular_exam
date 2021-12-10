import { Injectable } from '@angular/core';
import { Statistique } from './models/statistique';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StatistiqueService {
  public tabStat: Statistique[] = [];
  public getData(): Observable<Object> {
    return this.clientHttp.get('https://stats.naminilamy.fr/');
  }

  constructor(private clientHttp: HttpClient) {
    let stat1 = new Statistique(
      'fa1f5f40-be3b-11eb-91ec-7f5875ecfb46',
      'Nombre de gâteaux que j`ai mangé aujourd`hui',
      1
    );
    let stat2 = new Statistique(
      'ld1f5f40-ae3f-14eb-05gd-7q9875pefh28',
      'Nombre de cafards vivant dans ma chambre',
      56
    );
    let stat3 = new Statistique(
      'ld1gdf40-re3d-56eb-89fd-8q3675pdfh4q',
      'Nombre de nombre dans le nombre',
      0
    );

    this.tabStat.push(stat1, stat2);
    setTimeout(() => {
      this.tabStat.push(stat3);
    }, 2000);
  }
}
