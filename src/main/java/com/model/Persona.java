package com.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name ="personas")
public class Persona {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private String perNombre;
    private String perApellido;
    private Long perNumeroDocumento;
    private String perTipoDocumento;
    private Date perFechaNacimiento;

 
   

    public Long getid() {
        return id;
    }

    public void setid(Long id) {
        this.id = id;
    }

    public String getPerNombre() {
        return perNombre;
    }

    public void setPerNombre(String perNombre) {
        this.perNombre = perNombre;
    }

    public String getPerApellido() {
        return perApellido;
    }

    public void setPerApellido(String perApellido) {
        this.perApellido = perApellido;
    }

    public Long getPerNumeroDocumento() {
        return perNumeroDocumento;
    }

    public void setPerNumeroDocumento(Long perNumeroDocumento) {
        this.perNumeroDocumento = perNumeroDocumento;
    }

    public String getPerTipoDocumento() {
        return perTipoDocumento;
    }

    public void setPerTipoDocumento(String perTipoDocumento) {
        this.perTipoDocumento = perTipoDocumento;
    }

    public Date getPerFechaNacimiento() {
        return perFechaNacimiento;
    }

    public void setPerFechaNacimiento(Date perFechaNacimiento) {
        this.perFechaNacimiento = perFechaNacimiento;
    }
}
