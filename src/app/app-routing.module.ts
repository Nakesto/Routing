import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PengurusListComponent } from "./pengurus-list/pengurus-list.component";
import { MahasiswaListComponent } from "./mahasiswa-list/mahasiswa-list.component";
import { MatakuliahListComponent } from "./matakuliah-list/matakuliah-list.component";

const routes: Routes = [
    { path: 'mahasiswa-list', component: MahasiswaListComponent },
    { path: 'pengurus-list', component: PengurusListComponent },
    { path: 'matakuliah-list', component: MatakuliahListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }