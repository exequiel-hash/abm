package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.model.Persona;
import com.service.personaService;

@RestController

@RequestMapping("/api")
public class personaController {
    
 @Autowired   
private personaService personaService;


@PostMapping(value = "crear", consumes = "application/json")
public Persona crearPersona(@RequestBody Persona persona){
return personaService.crearPersona(persona);
    

}

@RequestMapping(value = "getPersonas", method = RequestMethod.GET, produces="application/json")
public List<Persona> getPersonas(){
    return personaService.getPersonas();
}


@GetMapping(value = "editar/{id}", produces = "application/json")
public Persona getPersonaById(@PathVariable ("id") Long id){
    return personaService.getPersonaById(id);
}


@DeleteMapping("{id}")
public void borrarPersona(@PathVariable ("id") Long id){
     personaService.borrarPersona(id);
}

@PostMapping(value = "update", consumes = "application/json")
public Persona updatePersona(@RequestBody Persona persona){
return personaService.updatePersona(persona);
    
}



}
