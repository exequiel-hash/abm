import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Persona } from 'src/model/Persona';
import { PersonaService } from 'src/service/persona.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';





@Component({
  selector: 'app-editar-crear-persona',
  templateUrl: './editar-crear-persona.component.html',
  styleUrls: ['./editar-crear-persona.component.css']
})
export class EditarCrearPersonaComponent implements OnInit {
  tiposDocumentos: string[] = ['DNI', 'Pasaporte', 'Cedula'];
  idPersona: any;
  accion = 'Crear';
  myForm: FormGroup;
  info:any;

  constructor(
    private fb: FormBuilder,
    private personaService: PersonaService,
    private route: Router,
    private snackBar: MatSnackBar,
    private aRoute: ActivatedRoute,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) {
    this.myForm = this.fb.group({
      perNombre: ['', [Validators.required, Validators.maxLength(20)]],
      perApellido: ['', [Validators.required, Validators.maxLength(20)]],
      perNumeroDocumento: [null, [Validators.required]],
      perTipoDocumento: ['', [Validators.required]],
      perFechaNacimiento: [null, [Validators.required]]
    });
    const idParam = 'id';
    this.idPersona = this.aRoute.snapshot.params[idParam];
  }

  ngOnInit(): void {

    
    if (this.data.info?.id) {
      this.accion = 'Editar';
     this.cargarDatosPersona();
    }
    else{
      this.accion = 'Crear';

    }
  }

  guardarPersona() {
    const persona: Persona = {
      id: this.data.info?.id,
      perNombre: this.myForm.get('perNombre')?.value,
      perApellido: this.myForm.get('perApellido')?.value,
      perNumeroDocumento: this.myForm.get('perNumeroDocumento')?.value,
      perTipoDocumento: this.myForm.get('perTipoDocumento')?.value,
      perFechaNacimiento: this.myForm.get('perFechaNacimiento')?.value
    };

    if (this.data.info?.id) {
      this.editarPersona(persona);
    } else {
      this.crearPersona(persona);
    }
  }

  crearPersona(persona: Persona) {
    this.personaService.crearPersona(persona).subscribe(() => {
      this.snackBar.open('La persona fue creada con éxito!', '', {
        duration: 3000
      });
      this.dialog.closeAll();
      this.route.navigate(['/']);
    });
  }

  editarPersona(persona: Persona) {
    this.personaService.updatePersona(persona).subscribe(() => {

      console.log(persona);
      this.snackBar.open('La persona fue actualizada con éxito!', '', {
        duration: 3000
      });
      this.dialog.closeAll();
      this.route.navigate(['/']);
    });
    
  }

  cargarDatosPersona() {
      this.myForm.patchValue({
        perNombre: this.data.info.perNombre,
        perApellido: this.data.info.perApellido,
        perNumeroDocumento: this.data.info.perNumeroDocumento,
        perTipoDocumento: this.data.info.perTipoDocumento,
        perFechaNacimiento: this.data.info.perFechaNacimiento
      });
  }
}
