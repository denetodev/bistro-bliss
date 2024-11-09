// client-info.component.ts
import { Component, OnInit } from '@angular/core';

interface StatisticCard {
  number: string;
  label: string;
}

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.scss'],
})
export class ClientInfoComponent implements OnInit {
  statistics: StatisticCard[] = [
    { number: '3', label: 'Locais' },
    { number: '1995', label: 'Descobertas' },
    { number: '65+', label: 'Equipe' },
    { number: '100%', label: 'Satisfação do Cliente' },
  ];

  ngOnInit(): void {}
}
