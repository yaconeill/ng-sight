import { Component, OnInit } from '@angular/core';
import { Server } from 'src/app/shared/server';
import { SAMPLE_SERVERS } from '../../shared/SAMPLE_SERVERS';

@Component({
  selector: 'app-section-health',
  templateUrl: './section-health.component.html',
  styleUrls: ['./section-health.component.css']
})
export class SectionHealthComponent implements OnInit {

  constructor() { }

  servers: Server[] = SAMPLE_SERVERS;

  ngOnInit() {
  }

}
