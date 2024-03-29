import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonList, IonCardContent, IonCard, IonIcon } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { HistoricDriveService } from '../services/historic-drive.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonIcon, IonCard, IonCardContent, 
    IonList,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponent,
    IonItem,
    IonLabel,
    CommonModule,
    IonCard
  ],
})
export class Tab1Page {
  public historicData;
  constructor(private historicDriveService: HistoricDriveService) {
    this.historicData = this.historicDriveService.getHistoricData();
  }
}
