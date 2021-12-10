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
}
