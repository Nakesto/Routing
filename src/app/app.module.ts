import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { MahasiswaService } from './mahasiswa.service';
import { MahasiswaListComponent } from './mahasiswa-list/mahasiswa-list.component';
import { PengurusListComponent } from './pengurus-list/pengurus-list.component';
import { MatakuliahListComponent } from './matakuliah-list/matakuliah-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MahasiswaListComponent,
    PengurusListComponent,
    MatakuliahListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MahasiswaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
