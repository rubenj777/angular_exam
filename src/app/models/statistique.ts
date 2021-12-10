export class Statistique {
  public id: string;
  public title: string;
  public value: number;

  constructor(aId: string, aTitle: string, aValue: number) {
    this.id = aId;
    this.title = aTitle;
    this.value = aValue;
  }
}
