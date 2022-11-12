import { Component, OnInit } from '@angular/core';
import { BearServiceService } from './services/bear-service.service';


@Component({
  selector: 'app-grid-component',
  templateUrl: './grid-component.component.html',
  styleUrls: ['./grid-component.component.scss']
})
export class GridComponentComponent {

  bears$ = this.bearService.getBears();
  constructor(private bearService:BearServiceService) { }


}
