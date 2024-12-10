import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RamenService } from '../../../in-memory-api/services/ramen.service';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule,
    RouterLink, 
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {

  ramenList: any[] = [];

  constructor(private _ramenSvc: RamenService) {}

  ngOnInit(): void {
    console.log("list on init");
      /*this. _ramenSvc.getAllRamen().subscribe((data) => {
      this.ramenList = data;*/
      console.log("logging ramen list: " + this.ramenList);
      this.ramenList = this._ramenSvc.getAllRamen();
    }
  }
