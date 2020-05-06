import { Component, OnInit } from '@angular/core';
import { InternasionalService } from '../services/internasional.service';

@Component({
  selector: 'app-dunia',
  templateUrl: './dunia.component.html',
  styleUrls: ['./dunia.component.scss']
})
export class DuniaComponent implements OnInit {
  sumConfirmed;
  sumRecovered;
  sumDeaths;
  public details: Object;
  public temp: Object=false;

  dtOptions: DataTables.Settings = {};
  constructor(private service:InternasionalService) {}

  ngOnInit() {
      this.service.getSumConfirmed()
        .subscribe(response => {
          this.sumConfirmed = response;
        });
      this.service.getSumRecovered()
        .subscribe(response => {
          this.sumRecovered = response;
        });
      this.service.getSumDeaths()
        .subscribe(response => {
          this.sumDeaths = response;
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