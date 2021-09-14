import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  constructor(private service: ServicesService) {}
  displayedColumns = ['position', 'catagories'];
  dataSource: any;
  dataSourceShow: any;
  filterString = '';
  ngOnInit(): void {
    this.service.getConfig().subscribe((result) => {
      this.dataSource = result;
      this.dataSourceShow = result;
    });
  }
  applyFilter() {
    let filterValue = this.filterString;
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSourceShow = this.dataSource.filter((element: string) =>
      element.toLowerCase().includes(filterValue)
    );
  }
}
