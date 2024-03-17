import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonIcon,
  IonButtons,
  IonCardHeader,
  IonCard,
  IonCardContent,
  IonCardTitle,
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { addIcons } from 'ionicons';
import { syncOutline, walletOutline } from 'ionicons/icons';
import { HistoricDriveService } from '../services/historic-drive.service';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NgxGaugeModule } from 'ngx-gauge';

addIcons({
  'wallet-outline': walletOutline,
  'sync-outline': syncOutline,
});

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    IonCardTitle,
    IonCardContent,
    IonCard,
    IonCardHeader,
    IonButtons,
    IonIcon,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponent,
    CommonModule,
    NgxGaugeModule,
  ],
})
export class Tab2Page {
  gaugeValue = 65;

  public currentBalanceSubject = new BehaviorSubject<number>(
    this.historicDriveService.getCurrentBalance()
  );

  isSynced = false;
  constructor(private historicDriveService: HistoricDriveService) {}

  sync() {
    if (this.isSynced) {
      return;
    }

    this.isSynced = true;
    this.historicDriveService.incrementBalance(15);
    this.currentBalanceSubject.next(
      this.historicDriveService.getCurrentBalance()
    );
    console.log('Syncing...');
    this.isSynced = true;
  }
}
