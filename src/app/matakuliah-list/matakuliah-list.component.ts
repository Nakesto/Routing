import { Component, OnInit } from '@angular/core';
import { MahasiswaService } from '../mahasiswa.service';
@Component({
  selector: 'app-matakuliah-list',
  templateUrl: './matakuliah-list.component.html',
  styleUrls: ['./matakuliah-list.component.css']
})
export class MatakuliahListComponent implements OnInit {

  public matkul = <any>[];
  constructor(private mhsService: MahasiswaService) { }

  ngOnInit(): void {
    this.matkul = this.mhsService.getMatkul();
  }
}
