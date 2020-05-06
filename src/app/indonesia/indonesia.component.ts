import { Component, OnInit } from '@angular/core';
import { NasionalService } from '../services/nasional.service';

@Component({
  selector: 'app-indonesia',
  templateUrl: './indonesia.component.html',
  styleUrls: ['./indonesia.component.scss']
})
export class IndonesiaComponent implements OnInit {
  summaries;
  public details: Object;
  public temp: Object=false;

  dtOptions: DataTables.Settings = {};
  constructor(private service:NasionalService) {}

  ngOnInit(): void {
      this.service.getSummaries()
        .subscribe(response => {
          this.summaries = response;
        });
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 10,
        processing: true
      };
      this.service.getDetails()
        .subscribe((resp: Response) => {
          this.details = resp;
          this.temp = true;
        });
  }
}