import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface HistoricTripData {
  date: Date;
  distanceTravelled: number;
  vetEarned: number;
  tripId: string;
}

@Injectable({
  providedIn: 'root',
})
export class HistoricDriveService {
  private historicData: HistoricTripData[] = [
    {
      date: new Date('2022-01-01'),
      distanceTravelled: 100,
      vetEarned: 50,
      tripId: '1',
    },
    {
      date: new Date('2022-01-02'),
      distanceTravelled: 200,
      vetEarned: 100,
      tripId: '2',
    },
    {
      date: new Date('2022-01-03'),
      distanceTravelled: 300,
      vetEarned: 150,
      tripId: '3',
    },
    {
      date: new Date('2022-01-04'),
      distanceTravelled: 400,
      vetEarned: 200,
      tripId: '4',
    },
    {
      date: new Date('2022-01-05'),
      distanceTravelled: 500,
      vetEarned: 250,
      tripId: '5',
    },
  ];

  constructor() {}

  getHistoricData(): Observable<HistoricTripData[]> {
    return of(this.historicData);
  }
}
