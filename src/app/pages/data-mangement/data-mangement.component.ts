import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-data-mangement',
  templateUrl: './data-mangement.component.html',
  styleUrls: ['./data-mangement.component.css']
})
export class DataMangementComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'age', 'email', 'contactNumber', 'address', 'dob', 'salary'];
  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service: DataService) {}

  ngOnInit(): void {
    this.service.getAllData().subscribe((data: any[]) => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator; // Link paginator
      this.dataSource.sort = this.sort; // Link sorting
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  clearSearch(): void {
    this.dataSource.filter = ''; // Clear filter
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage(); // Reset to the first page
    }
  }
  
}
