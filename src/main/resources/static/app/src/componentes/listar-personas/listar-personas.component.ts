import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { PersonaService } from 'src/service/persona.service';
import { EditarCrearPersonaComponent } from '../editar-crear-persona/editar-crear-persona.component';
import { Persona } from 'src/model/Persona';




@Component({
  selector: 'app-listar-personas',
  templateUrl: './listar-personas.component.html',
  styleUrls: ['./listar-personas.component.css']
})
export class ListarPersonasComponent implements OnInit {


  columnas: string[] = ['Id', 'Nombre', 'Apellido', 'TipoDocumento', 'NumeroDocumento', 'FechaNacimiento', 'Acciones'];
  tipoDocumento: string[] = ['DNI', 'Pasaporte', 'Cedula'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  listaPersonas: any;
  constructor(private personaService: PersonaService, public dialog: MatDialog,
    public snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.cargarPersonas();
  }


  applyFilter(filterType: string, event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();

    this.dataSource.filterPredicate = (data: any, filter: string) => {
      return data.perNombre.toLowerCase().includes(filter);
    };

    this.dataSource.filter = filterValue;
  }

  applyTipoDocumentoFilter(selectedTipoDocumento: string) {
    const filtro = selectedTipoDocumento ? selectedTipoDocumento.trim().toLowerCase() : '';

    this.dataSource.filter = filtro;
  }

  abrirPopup(info?: any) {
    const dialogRef = this.dialog.open(EditarCrearPersonaComponent, {
      width: '60%',
      data: { info: info }

    });
    dialogRef.afterClosed().subscribe(result => {
      this.personaService.getPersonas().subscribe(personas => {
        this.listaPersonas = personas;
        this.dataSource.data = this.listaPersonas;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
    });


  }


  cargarPersonas() {
    this.personaService.getPersonas()
      .subscribe(personas => {
        this.listaPersonas = personas;

        this.dataSource.data = this.listaPersonas;

      });

  }

  eliminarPersona(index: number) {
    const confirmacion = window.confirm('¿Está seguro que desea eliminar la persona?');
    if (confirmacion) {
      this.personaService.borrarPersona(index)
        .subscribe(() => {
          this.cargarPersonas();
          this.snackBar.open('La persona fue eliminada con éxito!', '', {
            duration: 3000
          });
        });
    }
  }







}
